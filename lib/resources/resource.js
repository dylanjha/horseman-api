'use strict'

class Resource {
  constructor (client) {
    this.client = client
  }

  get (url, options) {
    return this.client.get.apply(this.client, arguments)
  }

  post (url, options) {
    return this.client.post.apply(this.client, arguments)
  }
}

module.exports = Resource
