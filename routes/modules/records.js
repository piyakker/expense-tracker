const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('get all records')
})

router.get('/', (req, res) => {
  res.send('get all records')
})

module.exports = router