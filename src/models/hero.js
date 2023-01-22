const { Schema, model } = require("mongoose");

const heroSchema = new Schema({
  
  heroimg: {
    type: 'string',
    required: true,
    // unique: true,
  },
});

const hero = model('hero',heroSchema);
module.exports = hero;
