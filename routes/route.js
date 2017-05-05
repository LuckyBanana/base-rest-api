const express = require('express');
const router = express.Router();
const jwt = require('express-jwt')

const Controller = require('../controllers/controller')
const config = require('config')

const auth = jwt({ secret: config.jwtSecret })

router.post('/', auth, async (req, res) => {
  const { code, data } = await Controller.controller()
  res.status(code).send(data)
})

module.exports = router;
