const { Schema, model } = require("mongoose");

const showsSchema = new Schema({
  showtitle: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    maxlength: 35,
  },
  image: {
    type: 'string',
    required: true,
  },
  showdate: {
    type: Date,
    required: false,


  },
  showtime: {
    type: String,
    required: false,

  },
  showdesc: {
    type: String,
    required: false,
    trim: true,
  },
  showlocation: {
    type: String,
    required: false,
    trim: true,
  },
});

const shows = model('shows', showsSchema);
module.exports = shows;
