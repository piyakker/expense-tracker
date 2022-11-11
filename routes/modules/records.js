const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const { route } = require('./home')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  return Record.create(req.body)
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))
})

route.get('/:record_id/edit', (req, res) => {
  res.send('edit page')
})

route.put('/:record_id', (req, res) => {
  res.send('update record')
})

route.delete('/:record_id', (req, res) => {
  res.send('delete record')
})

module.exports = router