const artists = require("../models/Artists.js");

class artistscontroller {
  getAll(req, res, next) {
    artists.find({}, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }

  getname(req, res) {
    let { name } = req.params;
    artists.find({name}).then((result) => {
      if(result){
        return res.status(200).send(result);
      }
      else{
        res.status(404).send({
          message: "Not found"
        })
      }
    })

  }

  post(req, res, next) {
    let body = req.body;
    let artist = new artists({
        name:req.body&&req.body.name,
        image:req.file&&req.file.path,
        bio:req.body&&req.body.bio,
        description:req.body&&req.body.description
    });
    artist.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }
  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    artists.updateOne({ _id: id }, {  
      name:req.body&&req.body.name,
      image:req.file&&req.file.path,
      bio:req.body&&req.body.bio,
      description:req.body&&req.body.description }, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }
  delete(req, res, next) {
    let { id } = req.params;
    artists.deleteOne({ _id: id }, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }
}

const Artistscontroller = new artistscontroller();
module.exports = Artistscontroller;