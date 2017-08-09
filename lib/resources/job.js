'use strict'

class Job extends require('./resource') {
  create (params) {
    return this.post('/job', params)
  }

  get (jobId, jobAccessToken, params) {
    return this.get(`/job/${jobId}?token=${jobAccessToken}`, params)
  }
}

module.exports = Job
