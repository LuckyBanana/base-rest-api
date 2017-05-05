const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const api = require('./utils/api')
const authentication = require('./routes/authentication')
const controller = require('./routes/route')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', authentication)
app.use('/api/controllers', controller)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    const { code, data } = api.error({ message: err.message, error: err }, err.status || 500)
    res.status(code).send(data)
  })
}

app.use((err, req, res, next) => {
  const { code, data } = api.error(err.message, err.status || 500)
  res.status(code).send(data)
})

module.exports = app
