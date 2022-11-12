const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const homeRouter = require('./modules/home')
const recordRouter = require('./modules/records')
const userRouter = require('./modules/users')
const authRouter = require('./modules/auth')

router.use('/records',authenticator, recordRouter)
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/',authenticator, homeRouter)


module.exports = router