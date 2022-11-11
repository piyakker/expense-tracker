const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get all records')
})

module.exports = router