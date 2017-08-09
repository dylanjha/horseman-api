/* eslint-env jasmine */

'use strict'

const clientSpy = require('../support/client_spy')
const Job = require('../../lib/resources/job')

describe('job', function () {
  const client = clientSpy({})
  const job = new Job(client)
  const baseEndpoint = 'https://kennel.wobbals.com/horseman/job'

  describe('create', function () {
    it('should make the correct request and return a promise', function (done) {
      job.create({
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

  describe('get', function () {
    it('should make the correct request and return a promise', function (done) {
      job.get('xxx-job-id', 'xxx-access-token').then((resp) => {
        const lastReq = client.LAST_REQUEST
        expect(lastReq.method).toEqual('GET')
        expect(lastReq.url).toEqual(baseEndpoint + '/xxx-job-id?token=xxx-access-token')
        done()
      }).catch(done.fail)
    })
  })

  describe('destroy', function () {
    it('should make the correct request and return a promise', function (done) {
      job.destroy('xxx-job-id', 'xxx-access-token').then((resp) => {
        const lastReq = client.LAST_REQUEST
        expect(lastReq.method).toEqual('POST')
        expect(lastReq.url).toEqual(baseEndpoint + '/xxx-job-id/stop?token=xxx-access-token')
        done()
      }).catch(done.fail)
    })
  })
})
