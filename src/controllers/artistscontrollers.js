import artists from "../models/Artists.js";
import art from "../models/Art.js";
class artistscontroller {
  async getArtists(req, res) {
    try {
      const Artists = await artists.find().populate("arts")
      // .populate(
      //   await Artists?.map((data)=>(
      //   data?.arts?.map((art)=>(
      //   console.log(`${art}`,"artsssss")
      //   ))
      // ))
      // );

//         .map((data)=>{
//         return(
// data.arts.map((art)=>{
// return(art)
// }))
      // }));
      // .map((art)=>{
      // art.populate('arts');
      // })
      res.status(200).json({
        status: 200,
        success: true,
        data: Artists,
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

  // const Arts = artists.arts.map(art => art);
  //  artists.find({ _id: { $in: art } })
  //   .populate('arts')
  //   .exec((err, arts) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log(arts);
  //   });

  //     res.status(200).json({
  //       status: 200,
  //       success: true,
  //       data: Artists,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({
  //       status: 500,
  //       success: false,
  //       message: error.message,
  //     });
  //   }
  // }

  async registerArtists(req, res) {
    const { name, bio, description } = req.body;
    const image = req.file.path;
    if (!name || !description || !bio) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Body must be provided",
      });
    }
    try {
      await artists.create({
        name: req.body && name,
        image: req.file && image,
        bio: req.body && bio,
        description: req.body && description
      });
      return res.status(201).json({
        status: 201,
        success: true,
        message: "Artists added successfully",
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

  async updateArtists(req, res) {
    const { id } = req.params;
    const { name, bio, description } = req.body;
    const image = req.file.path;
    if (!name || !description || !bio) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Body must be provided",
      });
    }
    try {
      const Artists = await artists.findById(id);
      if (!Artists) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `Artist with id ${id} does not exist`,
        });
      }
      const result = await artists.updateOne({
        name: req.body && name,
        image: req.file && image,
        bio: req.body && bio,
        description: req.body && description
      });
      return res.status(200).json({
        status: 200,
        success: true,
        data: `Artist with id ${id} updated successfully`,
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

  async deleteArtists(req, res) {
    const { id } = req.params;
    try {
      const Artist = await artists.findOne({ _id: id });
      if (!Artist) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `Artist with id ${id} does not exist`,
        });
      }
      const result = await Artist.delete();
      return res.status(200).json({
        status: 200,
        success: true,
        message: `Artists with id ${id} softly deleted successfully`,
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

const Artistscontroller = new artistscontroller();
export default Artistscontroller;



