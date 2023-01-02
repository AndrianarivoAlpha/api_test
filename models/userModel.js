const mongoose = require('mongoose');
const UserModel = mongoose.model(
  "api_test",
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    birth: {
      type: Date,
      required: false
    },
  },
  "users"
)

module.exports = { UserModel }