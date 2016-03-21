var _ = require('lodash');

var whitelist;
var blacklist;
var logLevel;

module.exports = {
  channel: channel,
  init   : function (config) {
    whitelist = config.devlogWhitelist;
    blacklist = config.devlogBlacklist;
    logLevel  = config.devlogLevel;
    return this;
  }
};

/*========================================
 =         private functions             =
 ========================================*/
function channel(channelName) {
  var logger;
  channelName   = _.toLower(channelName);
  var isAllowed = !_.includes(blacklist, channelName) && (_.includes(whitelist, "*") || _.includes(whitelist, channelName));
  logger        = isAllowed ? getConsoleLogger(channelName) : getEmptyLogger();

  console.log('*** logger channel allowed: ', channelName, ":", isAllowed ? "YES" : "NO", " ***");
  return logger;
}

function getConsoleLogger(channel) {
  var counter       = 1;
  var channelPrefix = (channel ? "|" + channel + "|" : '').toUpperCase();

  return {
    error : logLevel >= 0 ? log("error") : _.noop,
    warn  : logLevel >= 1 ? log("warn") : _.noop,
    info  : logLevel >= 2 ? log("info") : _.noop,
    log   : logLevel >= 4 ? log("log") : _.noop,
    debug : logLevel >= 8 ? log("log") : _.noop,
    method: logLevel >= 4 ? logFn : _.noop
  };

  function logFn(message) {
    var messages = [channelPrefix, "|" + (counter++) + "|" + " ===== ", channel + "." + message + "()", " ===== "];
    console.log.apply(console, messages);
  }

  /*
   Higher order function returns another function
   */
  function log(name) {
    return function () {
      var args = _.toArray(arguments);
      args.unshift("|" + (counter++) + "|");
      args.unshift(channelPrefix);

      console[name].apply(console, args);
    };
  }
}

function getEmptyLogger() {
  return {
    dir   : _.noop,
    log   : _.noop,
    warn  : _.noop,
    info  : _.noop,
    error : _.noop,
    debug : _.noop,
    method: _.noop
  };
}