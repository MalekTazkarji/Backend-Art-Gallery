import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
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
const users = mongoose.model('Users',UsersSchema);
export default users;

