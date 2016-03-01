/**
 * Created by hzou on 2/29/16.
 */

var koa  = require('koa.io');
var app  = koa();
//middleware
var router      = require('koa-route');
var conditional = require('koa-conditional-get');
var etag        = require('koa-etag');
var duration    = require('./middleware/duration');
var koaStatic   = require('koa-static');
//configs
var defaults = require('./defaults.json');
var port     = process.env.PORT || defaults.port;

// middleware for koa
// etag works together with conditional-get
app.use(conditional()); //needed by etag
app.use(etag());        //etag for cache management
app.use(duration());    //puts "Duration" in the header
app.use(koaStatic(defaults.public)); //specify public folder

// middleware for socket.io's connect and disconnect
app.io.use(function* (next) {
  // on connect
  yield* next;
  // on disconnect
});

// router for socket event
app.io.route('new message', function* () {
  // we tell the client to execute 'new message'
  var message = this.args[0];
  this.broadcast.emit('new message', message);
});


app.listen(port);
console.log('Koa server listening at port', port);