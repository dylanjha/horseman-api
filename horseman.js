'use strict'

const Client = require('./lib/client')

function init (options) {
  const client = new Client(options)
  return client
}

module.exports = init
