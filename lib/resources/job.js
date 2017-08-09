'use strict'

class Job extends require('./resource') {
  create (params) {
    return this.client.post('/job', params)
  }

  get (jobId, jobAccessToken, params) {
    return this.client.get(`/job/${jobId}?token=${jobAccessToken}`, params)
  }

  destroy (jobId, jobAccessToken, params) {
    return this.client.post(`/job/${jobId}/stop?token=${jobAccessToken}`, params)
  }
}

module.exports = Job
