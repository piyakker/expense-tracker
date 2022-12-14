const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash = require('connect-flash')

const app = express()
const port = 3000
const routes = require('./routes/index')

//連線資料庫
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./config/mongoose')

//引用handlebars
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
  helpers: {
    compare: function (arg1, arg2, options) {
      return (arg1 === arg2) ? options.fn(this) : options.inverse(this)
    },
    addIcon: function (iconNumber) {
      const CATEGORY ={
        1: 'fa-solid fa-house',
        2: 'fa-solid fa-van-shuttle',
        3: 'fa-solid fa-face-grin-beam',
        4: 'fa-solid fa-utensils',
        5: 'fa-solid fa-pen'
      }
      return CATEGORY[iconNumber]
    }
  }
}))
app.set('view engine', 'hbs')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated(),
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg')  // 設定 warning_msg 訊息

  next()
})

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})