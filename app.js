const express =require('express')
const exphbs = require('express-handlebars')

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
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})