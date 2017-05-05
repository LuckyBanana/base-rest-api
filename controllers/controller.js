const config = require('config')
const knex = require('knex')
const _ = require('js-common-utils')

const api = require('../utils/api')
const logger = require('../utils/logger')

exports.controller = () => {
  try {
    const data = {}
    return api.success(data)
  }
  catch(err) {
    console.error(err)
    return api.error(err.message, 500)
  }
}
