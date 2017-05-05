const express = require('express')
const router = express.Router()
const Index = require('../controllers/authentication')

router.post('/authenticate', async (req, res) => {
  try {
    const { code, data } = await Index.authenticate(req.body.username, req.body.password)
    res.status(code).send(data)
  }
  catch(err) {
    const { code, data } = err
    res.status(code).send(data)
  }
})

module.exports = router
