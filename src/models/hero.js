import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  
  heroimg: {
    type: 'string',
    required: true,
  },
});

const hero = mongoose.model('hero',heroSchema);
export default hero;
