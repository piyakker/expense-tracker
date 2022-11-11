const Category = require('../category')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')

//引入類別資料
const categoryData = [
  { _id: 1, name: '家居物業', icon: 'fa-solid fa-house' },
  { _id: 2, name: '交通出行', icon: 'fa-solid fa-van-shuttle' },
  { _id: 3, name: '休閒娛樂', icon: 'fa-solid fa-face-grin-beam'},
  { _id: 4, name: '餐飲食品', icon: 'fa-solid fa-utensils' },
  { _id: 5, name: '其他', icon: 'fa-solid fa-pen' }
]

db.once('open', () => {
  Category.create(categoryData)
  .then(() => {
    console.log('category done!')
    process.exit()
  })
  .catch(err => console.log(err))
})