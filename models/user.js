const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});
const Counter = mongoose.model('Counter', counterSchema);

const userSchema = {
  _id: {
    type: Number,
    required: true
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
}

  userSchema.pre('save', function (next) {
    Counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, function (error, counter) {
      if (error)
        return next(error);
      this._id = counter.seq;
      next();
    });
  })


module.exports = mongoose.model('User', userSchema)