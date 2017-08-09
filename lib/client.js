'use strict'

const log = require('../log')
const request = require('request-promise-native')
const VERSION = require('../version')
const resources = {
  Job: require('./resources/job'),
  Archive: require('./resources/archive')
}

class Client {
  constructor (options) {
    options = options || {}
    log('initializing', options)
    this.version = VERSION
    this._prepResources()
  }

  _prepResources () {
    for (let type in resources) {
      // make an instance of each resource
      const resourceName = type.toLowerCase()
      const resource = new resources[type](this)
      log('initializing resource:', resourceName)
      // assign the resource name as a property on the client instance
      // so that methods can be called
      // the resources can be referenced like so:
      //     client.job
      //     client.archive
      this[resourceName] = resource
    }
  }

  request (options) {
    return request(options).catch((error) => {
      log('request error', error)
      return Promise.reject(error)
    })
  }

  get (url, data) {
    log('attempting GET', url, data)
    return this.request({
      method: 'GET',
      headers: this.requestHeaders(),
      url: this.urlBase() + url,
      body: data,
      json: true
    })
  }

  post (url, data) {
    log('attempting POST', url, data)
    return this.request({
      method: 'POST',
      headers: this.requestHeaders(),
      url: this.urlBase() + url,
      body: data,
      json: true
    })
  }

  urlBase () {
    return 'https://kennel.wobbals.com/horseman'
  }

  requestHeaders () {
    const headers = {
      'User-Agent': `horseman-api node ${this.version}`,
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }
    return headers
  }
}

module.exports = Client
