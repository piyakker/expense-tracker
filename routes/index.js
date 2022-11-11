const express = require('express')
const router = express.Router()

const homeRouter = require('./modules/home')
const recordRouter = require('./modules/records')

router.use('/', homeRouter)
router.use('/records', recordRouter)


module.exports = router