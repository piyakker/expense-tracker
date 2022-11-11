const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  return Record.create(req.body)
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))
})

module.exports = router