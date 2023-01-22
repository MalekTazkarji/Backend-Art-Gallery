const art = require("../models/Art");

class artcontrollers {
  getAll = async (req, res, next) => {
    // art.find({}, (error, response) => {
    //   if (error) return next(error);
    //   res.status(200).send(response.populate('artist'));
    // });
    const allArt = await art.find().populate('artist');
    res.status(200).json(allArt);
  }

  post(req, res, next) {
    let arty = new art({
      arttitle: req.body.arttitle,
      artimage: req.file && req.file.path,
      artprice: req.body.artprice,
      artdesc: req.body.artdesc,
      artist: req.body && req.body.artist
    });
    arty.save((error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }
  
  put(req, res, next) {
    let { id } = req.params;
    // let body = req.body;
    // let image = req.file.path;
    art.updateOne(
      { _id: id },
      {
        arttitle: req.body && req.body.arttitle,
        artimage: req.file && req.file.path,
        artprice: req.body && req.body.artprice,
        artdesc: req.body && req.body.artdesc,
        artist:req.body && req.body.artist
      },
      (error, response) => {
        if (error) return next(error);
        res.status(200).send(response);
      }
    );
  }
  delete(req, res, next) {
    let body = req.body;
    let { id }=req.params;
    art.deleteOne({ _id: id }, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }
}
const artscontrollers = new artcontrollers();
module.exports = artscontrollers;
