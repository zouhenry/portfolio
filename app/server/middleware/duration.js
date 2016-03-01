module.exports = function () {
    return function* (next) {
        var start = Date.now();
        yield next;
        var duration = Date.now() - start;
        this.set('Duration', duration + 'ms');
  };
};
