module.exports = function () {
    return function* (next) {
        var start = Date.now();
        yield next;
        var duration = Date.now() - start;
        console.log(this.request.method, this.request.url, 'took', duration+'ms');
  };
};
