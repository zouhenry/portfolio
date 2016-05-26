/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.chart')
  .controller('chartController', ChartController);

function ChartController($scope, socket) {
  var self      = this;
  var duration  = 30;
  var frequency = 1;
  var ticks     = duration / frequency;

  _.extend(self, {
    data    : { dataset0: [] },
    feeds: [],
    options : getOptions()
  });

  init();

  function init() {
    // socket.connect('ws://localhost:4000');
    socket.connect();
    socket.on('connect', function () {
      socket.emit('startFeed', { duration: duration, frequency: frequency });
    });

    socket.on('initialFeed', function (data) {
      self.data.dataset0 = data;
    });

    socket.on('feed', function (data) {
      if (self.data.dataset0.length >= ticks) {
        self.data.dataset0.shift();
      }
      self.data.dataset0.push(data);
      self.feeds.push(data);
    });

    $scope.$on('$destroy', function () {
      socket.emit('stopFeed');
      socket.disconnect();
    });
  }

  function getOptions() {
    return {
      margin: {
        top: 15
      },
      series: [
        {
          axis   : "y",
          dataset: "dataset0",
          key    : "bpm",
          label  : "Heart Rate (BPM)",
          color  : "#1f99a5",
          type   : ['column'],
          id     : 'hr'
        },
        {
          axis   : "y",
          dataset: "dataset0",
          key    : "mph",
          label  : "Speed (MPH)",
          color  : "#3333ff",
          type   : ['line', 'area', 'column'],
          id     : 'speed'
        }
      ],
      axes  : {
        x: {
          key       : "x",
          ticks     : ticks,
          ticksShift: {
            x: -10
          },
          tickFormat: function (value, index) {
            return ((ticks - 1) - (index % ticks)) * frequency + 's';
          }
        }
      }
    };
  }
}