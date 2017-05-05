const config = require('config')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const api = require('../utils/api')

const db = {} // Database driver

// db.run('CREATE TABLE USER (ID_USER INTEGER PRIMARY KEY AUTOINCREMENT, USERNAME TEXT, PASSWORD TEXT, VALID INTEGER, CREATION_DATE TIMESTAMP)')

exports.authenticate = (user, password) => {
  const query = 'SELECT USERNAME FROM USER WHERE VALID = $valid AND USERNAME = $username AND PASSWORD = $password'
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256')
    hash.update(password)
    const params = { $valid: 1, $username: user, $password: hash.digest('hex') }

    db.GET(query, params, (err, rows) => {
      if(!err && row) {
        const token = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (604800),
        }, config.jwtSecret)
        resolve(api.success({ token: token }))
      }
      else {
        reject(api.error('Incorrect credentials.', 401))
      }
    })
  })
}
