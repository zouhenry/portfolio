/**
 * Created by hzou on 2/29/16.
 */

var conditional = require('koa-conditional-get');
var etag = require('koa-etag');
var send = require('koa-send'),
    koa = require('koa'),
    app = koa();

var defaults = require('./defaults.json');
var port = process.env.PORT || defaults.port;

// etag works together with conditional-get
app.use(conditional());
app.use(etag());

/** static files */
app.use(function* () {
    console.log('requesting', this.path);
    yield send(this, defaults.index);
    yield send(this, this.path, { root: defaults.public });
});

app.listen(port);
console.log('Koa server listening at port', port);