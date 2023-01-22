const { Schema, model } = require("mongoose");

const artistsSchema = new Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
    maxlength: 20,
  },

  image: String,

  bio: {
    type: "string",
    required: true,
  },

  description: String,
});
const artists = model("artists", artistsSchema);
module.exports = artists;
