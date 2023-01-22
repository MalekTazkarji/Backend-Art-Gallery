const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  username: {
    type: 'string',
    unique: true,
    required: true,
    trim: true,
    maxlength: 35,
  },
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: false, // if users will create accounts, change to true
    unique: true,
    trim: true,
  },
  password: {
    type: 'string',
    required: true,
    trim: true,
  },
});
const users = model('Users',UsersSchema);
module.exports = users;

