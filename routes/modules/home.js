const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const dayjs = require('dayjs')

router.get('/', (req, res) => {
  return Record.find({})
  .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
        record.date = dayjs(record.date).format('YYYY-MM-DD')
      })
      res.render('index', { records, totalAmount })
    })
})

module.exports = router