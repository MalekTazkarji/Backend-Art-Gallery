import express from "express";
const router = express.Router();
import UsersController from "../controllers/UsersController.js";

router.get("/usersAll", UsersController.getAll);
router.get("/users/:username", UsersController.get);
router.post("/users/create", UsersController.post);
router.put("/users/update", UsersController.put);
router.delete("/users/delete:username", UsersController.delete);

export default router;
