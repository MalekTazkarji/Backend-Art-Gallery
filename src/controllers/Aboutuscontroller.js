const aboutus = require("../models/Aboutus");

class Aboutuscontroller {
  getAll(req, res, next) {
    aboutus.find({}, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }

  post(req, res, next) {
    let body = req.body;
    let about = new aboutus(body);
    about.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  put(req, res, next) {
    let { id } = req.params;
    let body = req.body;
    aboutus.updateOne({_id: id }, { $set: body }, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }

  delete(req, res, next) {
    let { id } = req.params;
    aboutus.deleteOne({ _id: id }, (error, response) => {
      if (error) return next(error);
      res.status(200).send(response);
    });
  }
}

const Aboutuscontrollers= new Aboutuscontroller();
module.exports = Aboutuscontrollers;
