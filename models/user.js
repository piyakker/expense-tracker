const mongoose = require('mongoose')
const Schema = mongoose.Schema

const autoIncrementModelID = require('./userCounter')

const userSchema = Schema({
  _id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

  userSchema.pre('save', function (next) {
    if (!this.isNew) {
      next();
      return;
    }
    autoIncrementModelID('activities', this, next)
  })


module.exports = mongoose.model('User', userSchema)