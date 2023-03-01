import  mongoose from "mongoose";

const artistsSchema = new mongoose.Schema({
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
  arts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "art",
      trim: true,
    },
  ],
  description: String,
});

const artists = mongoose.model("Artist", artistsSchema);
export default artists;
