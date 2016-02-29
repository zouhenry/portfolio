/**
 * Created by hzou on 2/29/16.
 */

var send = require('koa-send'),
    koa = require('koa'),
    app = koa();

var defaults = require('./defaults.json');

/** static files */
app.use(function* () {
    console.log('requesting', this.path);
    if ("/" == this.path) {
        yield send(this, defaults.index);
    } else {
        yield send(this, this.path, { root: defaults.public });
    }
});

app.listen(defaults.port);
console.log('Koa server listening at port', defaults.port);