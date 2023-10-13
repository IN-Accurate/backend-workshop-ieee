const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 8,
      max: 30,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model('users', userSchema);
module.exports = Users;
