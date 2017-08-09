/* eslint-env jasmine */

'use strict'

const clientSpy = require('../support/client_spy')
const Job = require('../../lib/resources/job')

describe('job', function () {
  const client = clientSpy({})
  const event = new Job(client)
  const baseEndpoint = 'https://kennel.wobbals.com/job'

  describe('create', function () {
    it('should make the correct request and return a promise', function (done) {
      event.create({
        url: 'https://ngrok.io/abcdef',
        width: '720',
        height: '640',
        callbackURL: 'https://ngrok.io/abcdef/callback'
      }).then((resp) => {
        const lastReq = client.LAST_REQUEST
        expect(lastReq.method).toEqual('POST')
        expect(lastReq.url).toEqual(baseEndpoint)
        expect(lastReq.body.url).toEqual('https://ngrok.io/abcdef')
        done()
      }).catch(done.fail)
    })
  })
})
