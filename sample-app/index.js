const SimpleNodeLogger = require('simple-node-logger');
const opts = {
  timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
const log = SimpleNodeLogger.createSimpleLogger(opts);

log.info('subscription to ', channel, ' accepted at ', new Date().toJSON());

(function repeatMe() {
  setTimeout(() => {
    log.info('it works');
    repeatMe();
  }, 1000)
})();
