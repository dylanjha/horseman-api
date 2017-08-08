/* eslint-env jasmine */

const Client = require('../../lib/client')

describe('Client', () => {
  it('should return a client instance', () => {
    const client = new Client({})
    const version = require('../../version')
    expect(client.version).toEqual(version)
  })

  describe('requestHeaders', () => {
    it('set the expected properties', () => {
      const client = new Client({})
      expect(client.requestHeaders()).toEqual({
        'User-Agent': `horseman-api node ${client.version}`,
        'Content-Type': 'application/vnd.api+json',
        'Accept': '*/*'
      })
    })
  })

  describe('urlBase', () => {
    it('should point to the expected host', () => {
      const client = new Client({})
      expect(client.urlBase()).toEqual('https://kennel.wobbals.com')
    })
  })

  describe('resources', () => {
    it('should load the available resources', () => {
      const client = new Client({})
      expect(client.job).not.toBeUndefined()
      expect(client.archive).not.toBeUndefined()
    })
  })
})
