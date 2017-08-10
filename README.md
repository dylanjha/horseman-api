# Horseman Api

## Installation

yarn:

```
yarn add horseman-api
``

npm:

```
npm install horseman-api --save
``


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
