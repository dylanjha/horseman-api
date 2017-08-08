/* eslint-env jasmine */

'use strict'

describe('entry point', () => {
  it('should export a function', () => {
    const horseman = require('../horseman')
    expect(typeof horseman).toEqual('function')
  })
})
