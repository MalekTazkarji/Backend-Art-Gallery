const { Schema, model } = require("mongoose");

const ArtSchema = new Schema({
  arttitle: {
    type: "string",
    required: true,
    trim: true,
    maxlength: 35,
  },
  artimage: {
    type: "string",
    required: true,
  },
  artprice: {
    type: "string",
    required: false,
    trim: true,
  },
  artdesc: {
    type: "string",
    required: true,
    trim: true,
  },
  artist: { type: Schema.Types.ObjectId, ref: "artists", required: true },
});

const art = model("art", ArtSchema);
module.exports = art;
