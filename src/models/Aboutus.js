const { Schema, model } = require("mongoose");

const AboutusSchema = new Schema({
  aboutustext: {
    type: "string",
    required: true,
    trim: true,
    maxlength: 1000,
  },
 
  visiontext: {
    type: "string",
    required: true,
    trim: true,
    maxlength: 1000,
  },
});

const aboutus = model("aboutus",AboutusSchema);
module.exports = aboutus;
