const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const Category = require('../../models/category')
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

router.get('/:record_id/edit', (req, res) => {
  const recordId = req.params.record_id
  return Record.findOne({_id: recordId})
  .lean()
  .then(record => {
    record.date = dayjs(record.date).format('YYYY-MM-DD')
    res.render('edit', {record})
  })
})

router.put('/:record_id', (req, res) => {
  res.send('update record')
})

router.delete('/:record_id', (req, res) => {
  res.send('delete record')
})

module.exports = router