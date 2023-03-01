import hero from "../models/hero.js";

class heroController {
 async getHero(req, res, next) {
    try{
    const Hero = await hero.find({});
    return res.status(200).json({
      status: 200,
      success: true,
      data : Hero
    })      
    }catch(err){
      return res.status(404).json({
        status: 404,
        success: false,
        message: err.message
      }) 
    }    
  }

 async RegisterHero(req, res, next) {
      const heroimg = req.file.path;
      if (!heroimg) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: "Image must be provided",
        });
      }
      try {
        await hero.create({
           heroimg:req.file && heroimg,
        });
        return res.status(201).json({
          status: 201,
          success: true,
          message: "Image added successfully",
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

 async  UpdateHero(req, res, next) {
    const { id } = req.params;
    const heroimg = req.file.path;
    if (!heroimg) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Image must be provided",
      });
    }
    try {
      const Hero = await hero.findById(id);
      if (!Hero) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `Image with id ${id} does not exist`,
        });
      }
      const result = await Hero.updateOne({
       heroimg: req.file && heroimg
      });
      return res.status(200).json({
        status: 200,
        success: true,
        data: `Image with id ${id} updated successfully`,
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
  
 async  deleteHero(req, res, next) {
    let { id } = req.params;
    try{
      const Hero = await hero.findById(id);
      if (!Hero)
      return res.status(404).json({
       status: 404,
       success: false,
       message:`image is not found with this ${id}`
      })
      const result = await Hero.delete();
      return res.status(200).json({
        status: 200,
        success: true,
        message: `Hero with id ${id} softly deleted successfully`,
      });

    }catch(err){
      return res.status(500).json({
        status: 500,
        success: false,
        message: err.message
      })
    }
  }
}

const herocontroller = new heroController();
export default herocontroller;