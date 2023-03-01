import art from "../models/Art.js";
import artists from "../models/Artists.js";
class artcontrollers {
  async getArts(req, res) {
    try {
      const Arts = await art.find({}).populate('artist');
      res.status(200).json({
        status: 200,
        success: true,
        data: Arts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  }
  
  async registerArt(req, res) {
    const { arttitle , artprice , artdesc , artist } = req.body;
    const artimage = req.file.path;
    if (!arttitle || !artprice || !artdesc || !artist) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Body must be provided",
      });
    }
    try {
     const result= await art.create({
        arttitle: arttitle,
        artimage: req.file && artimage,
        artprice: artprice,
        artdesc: artdesc,
        artist: artist
      });

const findArtist= await artists.findById(artist);
findArtist.arts.push(result);
await findArtist.save();
      return res.status(201).json({
        status: 201,
        success: true,
        message: "Art added successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  }
  
  async updateArt(req, res) {
    const { id } = req.params;
    const { arttitle , artprice , artdesc , artist } = req.body;
    let image = null;
    if (req.file) {
      image = req.file.path;
    }
    else {
      image = req.body.image;
    }
    if (!arttitle || !artprice || !artdesc || !artist) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Name & Category must be provided",
      });
    }
    try {
      const Art = await art.findById(id);
      if (!Art) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `Art with id ${id} does not exist`,
        });
      }
      const result = await Art.updateOne({
        arttitle: arttitle,
        artimage: image,
        artprice: artprice,
        artdesc: artdesc,
        artist: artist
      });
      return res.status(200).json({
        status: 200,
        success: true,
        data: `Art with id ${id} updated successfully`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        success: false,
        message: error.message,
      });
    }
  }


async deleteArt(req, res) {
  const { id } = req.params;
  try {
    const Art = await art.findOne({ _id: id });
    if (!Art) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: `Art with id ${id} does not exist`,
      });
    }
    const result = await Art.delete();
    return res.status(200).json({
      status: 200,
      success: true,
      message: `Art with id ${id} softly deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
}
}
const artscontrollers = new artcontrollers();
export default artscontrollers;

