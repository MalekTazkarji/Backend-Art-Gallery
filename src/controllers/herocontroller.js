const hero = require("../models/hero");

class heroController {
  getAll(req, res, next) {
    console.log("fetna 3al get all");
    hero.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  get(req, res, next) {
    console.log("fetna 3al get");
    let { id } = req.params;
    hero.findById(id, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  post(req, res, next) {
    console.log("fetna 3al post");
    // let body = req.body;

    let Hero = new hero({heroimg:req.file.path});
    // console.log("Hero: " + Hero);
    // console.log("after hero creating");
    Hero.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  put(req, res, next) {
    console.log("fetna 3al put")
    let { id } = req.params;
    let image = req.file.path;
    hero.updateOne(
      { _id: id },
      {
        $set:{image} ,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send(response);
      }
    );
  }

  delete(req, res, next) {
    let { id } = req.params;
    hero.deleteOne({ _id: id }, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }
}

const herocontroller = new heroController();
module.exports = herocontroller;
