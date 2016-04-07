/**
 * Created by hzou on 2/29/16.
 */

var koa = require('koa.io');
var app = koa();

//configs
var config = require('./config.json');
var devlog = require('./devlog').init(config);

//middleware
var route       = require('koa-route');
var cors        = require('koa-cors');
var conditional = require('koa-conditional-get');
var etag        = require('koa-etag');
var duration    = require('./middleware/duration');
var koaLogger   = require('./middleware/logger');
var koaStatic   = require('koa-static');
var resume      = require('./routes/resume');

//configs
var port   = process.env.PORT || config.port;
var logger = devlog.channel('portfolio');

// middleware for koa
// etag works together with conditional-get
app.use(cors());  //CORS
app.use(conditional()); //needed by etag
app.use(etag());        //etag for cache management
app.use(duration());    //puts "Duration" in the header
app.use(koaLogger());    //puts "Duration" in the header
app.use(koaStatic(config.public)); //specify public folder

// middleware for socket.io's connect and disconnect
app.io.use(function*(next) {
  // on connect
  logger.log('socket connected');
  yield * next;
  logger.log('socket disconnected');
  // on disconnect
});

app.use(route.get('/api/resume/', resume.get));

// router for socket event
require('./chart.socket').init(app.io);

app.listen(port);
console.log('Koa server listening at port', port);