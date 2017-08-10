# Horseman Api

[![Build Status](https://travis-ci.org/dylanjha/horseman-api.svg?branch=master)](https://travis-ci.org/dylanjha/horseman-api)

## Installation

yarn:

```
yarn add horseman-api
```

npm:

```
npm install horseman-api --save
```


## Usage

```javascript
const horseman = require('horseman')()

// start a new job
horseman.job.create(params).then(console.log).catch(console.error)
// get a job
horseman.job.get('<job-id>', '<access-token>').then(console.log).catch(console.error)
// stop a job
horseman.job.destroy('<job-id>', '<access-token>').then(console.log).catch(console.error)
// get the job archive
horseman.job.getArchive('<job-id>', '<access-token>').then(console.log).catch(console.error)
```
## Debugging

This library uses the [debug package](https://www.npmjs.com/package/debug) standard for optional logger output. To see logger output from this library set DEBUG env variable to 'horseman-api'. For example to see log output in tests:

```
DEBUG=horseman-api* yarn test
```

