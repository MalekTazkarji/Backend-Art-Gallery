import mongoose from "mongoose";

const ArtSchema = new mongoose.Schema({
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
  artist: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Artist",
     required: true 
            },
});

const art = mongoose.model("art", ArtSchema);
export default art;
