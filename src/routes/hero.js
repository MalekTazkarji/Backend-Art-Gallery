import express from "express";
const router = express.Router();
import herocontroller from "../controllers/herocontroller.js";
import upload from "../middleware/upload.js";

router.get("/heroAll", herocontroller.getHero);
router.post("/hero/post",upload.single('heroimg'),herocontroller.RegisterHero);
router.put("/hero/update/:id",upload.single('image'),herocontroller.UpdateHero);
router.delete("/hero/delete/:id", herocontroller.deleteHero);

export default router;
