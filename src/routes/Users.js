const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.get("/usersAll", UsersController.getAll);
router.get("/users/:username", UsersController.get);
router.post("/users/create", UsersController.post);
router.put("/users/update", UsersController.put);
router.delete("/users/delete:username", UsersController.delete);

// router.post("", UsersController.post);
module.exports = router;
