/**
 * Created by hzou on 2/29/16.
 */

var koa = require('koa.io');
var app = koa();
//middleware
var router = require('koa-route');
var conditional = require('koa-conditional-get');
var etag = require('koa-etag');
var duration = require('./middleware/duration');
var logger = require('./middleware/logger');
var koaStatic = require('koa-static');
//configs
var defaults = require('./defaults.json');
var port = process.env.PORT || defaults.port;

// middleware for koa
// etag works together with conditional-get
app.use(conditional()); //needed by etag
app.use(etag());        //etag for cache management
app.use(duration());    //puts "Duration" in the header
app.use(logger());    //puts "Duration" in the header
app.use(koaStatic(defaults.public)); //specify public folder

// middleware for socket.io's connect and disconnect
app.io.use(function* (next) {
    // on connect
    console.log('socket connected');
    yield* next;
    console.log('socket disconnected');
    // on disconnect
});

// router for socket event
require('./feeds.socket').init(app.io);

app.listen(port);
console.log('Koa server listening at port', port);