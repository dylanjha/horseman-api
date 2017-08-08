const debug = require('debug')('horseman-api')

module.exports = function () {
  debug.apply(debug, arguments)
}
