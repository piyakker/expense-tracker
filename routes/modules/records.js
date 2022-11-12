const express = require('express')
const dayjs = require('dayjs')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const newRecord = req.body
  newRecord.userId = userId
  return Record.create(newRecord)
  .then(() => res.redirect('/'))
  .catch(err => console.log(err))
})

router.get('/:record_id/edit', (req, res) => {
  const userId = req.user._id
  const recordId = req.params.record_id
  return Record.findOne({ _id: recordId, userId })
  .lean()
  .then(record => {
    record.date = dayjs(record.date).format('YYYY-MM-DD')
    res.render('edit', {record})
  })
  .catch(err => console.log(err))
})

router.put('/:record_id', (req, res) => {
  const userId = req.user._id
  const recordId = req.params.record_id
  return Record.findOneAndUpdate({_id: recordId, userId}, req.body)
  .then(()=> res.redirect('/'))
  .catch(err => console.log(err))
})

router.delete('/:record_id', (req, res) => {
  const userId = req.user._id
  const recordId = req.params.record_id
  return Record.findOneAndDelete({ _id: recordId, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router