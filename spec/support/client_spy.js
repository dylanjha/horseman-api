/* eslint-env jasmine */

'use strict'

const Client = require('../../lib/client')

let REQUESTS = []

function clientSpy (options) {
  const client = new Client(options)
  client.REQUESTS = REQUESTS
  client.request = function (reqOptions, cb) {
    REQUESTS.push(reqOptions)
    client.LAST_REQUEST = reqOptions
    return new Promise(function (resolve, reject) {
      process.nextTick(function () {
        resolve({})
        if (cb) cb.call(this, null, {})
      })
    })
  }
  return client
}

module.exports = clientSpy
