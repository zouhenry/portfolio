var logger = require('../devlog').channel('koa.logger');

module.exports = function () {
    return function* (next) {
        var start = Date.now();
        yield next;
        var duration = Date.now() - start;
        logger.debug(this.request.method, this.request.url, 'took', duration+'ms');
  };
};
