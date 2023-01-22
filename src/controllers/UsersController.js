const Users = require("../models/Users");

class UsersController {
  getAll(req, res, next) {
    Users.find({}, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  get(req, res, next) {
    let { id } = req.params;
    Users.findById(id, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  post(req, res, next) {
    let body = req.body;
    // console.log(body)
    let users = new Users(body);
    users.save((err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }

  put(req, res, next) {
    let { username } = req.params;
    let body = req.body;
    Users.updateOne(
      {
        username: username,
      },
      {
        $set: body,
      },
      (err, response) => {
        if (err) return next(err);
        res.status(200).send(response);
      }
    );
  }

  delete(req, res, next) {
    let { username } = req.params;
    Users.deleteOne({ username: username }, (err, response) => {
      if (err) return next(err);
      res.status(200).send(response);
    });
  }
}

const usersController = new UsersController();
module.exports = usersController;
