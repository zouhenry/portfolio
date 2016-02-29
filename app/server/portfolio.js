/**
 * Created by hzou on 2/29/16.
 */

var send = require('koa-send'),
    koa = require('koa'),
    app = koa();

var defaults = require('./defaults.json');
var port = process.env.PORT || defaults.port;

/** static files */
app.use(function* () {
    console.log('requesting', this.path);
    if ("/" == this.path) {
        yield send(this, defaults.index);
    } else {
        yield send(this, this.path, { root: defaults.public });
    }
});

app.listen(port);
console.log('Koa server listening at port', port);