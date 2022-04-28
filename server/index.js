const express = require('express')
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0ce0ddbfb0ce425bb3707c1432454636',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'))
})

const port = process.env.PORT || 4646

app.listen(port, () => console.log(`take us to ${port}`))
