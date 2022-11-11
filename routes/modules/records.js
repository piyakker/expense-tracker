const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.send('get create page')
})

router.post('/', (req, res) => {
  res.send('get all records')
})

router.get('/', (req, res) => {
  res.send('get all records')
})

module.exports = router