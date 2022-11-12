const express = require('express')
const router = express.Router()

const homeRouter = require('./modules/home')
const recordRouter = require('./modules/records')
const userRouter = require('./modules/users')

router.use('/', homeRouter)
router.use('/records', recordRouter)
router.use('/users', userRouter)


module.exports = router