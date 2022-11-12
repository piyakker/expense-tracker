const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')
const dayjs = require('dayjs')

router.get('/', (req, res) => {
  const {categoryId} = req.query
  const queryObject = {}
  if (categoryId) {
    queryObject.categoryId = categoryId
  }
  return Record.find(queryObject)
  // .populate('categoryId')
  .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(record => {
        totalAmount += record.amount
        record.date = dayjs(record.date).format('YYYY-MM-DD')
      })
      res.render('index', { records, totalAmount })
    })
    .catch(err => console.log(err))
})

module.exports = router