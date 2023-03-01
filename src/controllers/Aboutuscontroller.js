import aboutus from "../models/Aboutus.js";

class Aboutuscontroller {
  async getAboutUS(req, res) {
    try {
      const Aboutus = await aboutus.find({});
      res.status(200).json({
        status: 200,
        success: true,
        data: Aboutus,
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

  async updateAboutUs(req, res) {
    const { id } = req.params;
    const { aboutustext , visiontext } = req.body;
    if (!aboutustext || !visiontext) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "AboutusText & VisionText must be provided",
      });
    }
    try {
      const Aboutus = await aboutus.findById(id);
      if (!Aboutus) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `AboutUs Section with id ${id} does not exist`,
        });
      }
      const result = await Aboutus.updateOne({ aboutustext , visiontext });
      return res.status(200).json({
        status: 200,
        success: true,
        data: `AboutUs Section with id ${id} updated successfully`,
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

const Aboutuscontrollers= new Aboutuscontroller();
export default Aboutuscontrollers;
