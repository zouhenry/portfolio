/**
 * Created by hzou on 3/20/16.
 */
const _      = require('lodash');
const logger = require('./devlog').channel('chart.socket');

//modules export
module.exports = {
  init: init
};

function init(io) {
  logger.method('init');

  const upperMph = 11;
  const lowerMph = 4;

  io.route('startFeed', startFeed);
  io.route('stopFeed', stopFeed);

  /*========================================
   =             IMPLEMENTATION            =
   ========================================*/
  function getInitialFeed(opts) {
    logger.method('getInitialFeed');
    const socket = this;
    socket.x = socket.x || 0;

    opts = opts || { duration: 60, frequency: 3 };

    var hrsCount = opts.duration / opts.frequency;
    var startMPH   = socket.startMPH || 3;
    var data      = _.range(hrsCount || 20).map(function (value) {
      var bpm = generateData(socket, startMPH);
      startMPH  = bpm.mph;
      return bpm;
    });

    socket.startMPH = _.last(data).mph;
    socket.emit('initialFeed', data);
  }

  function* startFeed(next, opts) {
    logger.method('startFeed');
    logger.debug('opts', opts);
    opts = opts || { frequency: 3, duration: 60 };

    const socket     = this;
    socket.startMPH   = true;

    getInitialFeed.call(socket, opts);

    var feedInterval = setInterval(function () {
      if (socket.disconnected || socket.startMPH === false) {
        logger.debug('clearing feedInterval');
        clearInterval(feedInterval);
      } else {
        var feed       = generateData(socket, socket.startMPH);
        socket.startMPH = feed.mph;
        socket.emit('feed', feed);
      }
    }, opts.frequency * 1000);
  }

  function* stopFeed(next) {
    logger.method('stopFeed');
    var socket     = this;
    socket.startMPH = false;
  }

  function generateData(socket, last) {
    var mph;
    var random = Math.random();

    if (last >= upperMph || random < 0.5) {
      mph = last - random * 2;
    } else if (last <= lowerMph || random >= 0.5) {
      mph = last + random * 2;
    }

    var bpm = mph * 7.5 + 40;
    if(mph < 5){
      mph = Math.ceil(mph);
      bpm = Math.ceil(bpm);
    } else {
      mph = Math.floor(mph);
      bpm = Math.floor(bpm);
    }

    return { x: ++socket.x, mph: mph, bpm: bpm };
  }
}