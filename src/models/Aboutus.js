import mongoose from "mongoose";

const AboutusSchema = new mongoose.Schema({
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

const aboutus = mongoose.model("aboutus",AboutusSchema);
export default aboutus