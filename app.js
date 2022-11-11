const express =require('express')
const app = express()
const port = 3000
const routes = require('./routes/index')

//連線資料庫
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
require('./config/mongoose')

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})