const { Schema, model } = require("mongoose");

const workshopSchema = new Schema({
  shoptitle: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    maxlength: 35,
  },
  image: {
    type: 'string',
    required: false,
  },
  shopdate: {
    type: Date,
    required: false,


  },
  shoptime: {
    type: String,
    required: false,

  },
  shopdesc: {
    type: String,
    required: false,
    trim: true,
  },
  shoplocation: {
    type: String,
    required: false,
    trim: true,
  },
});

const workshop = model('workshop', workshopSchema);
module.exports = workshop;
