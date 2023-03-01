import express from "express"
const router=express.Router();
import artscontrollers from "../controllers/artcontrollers.js";
import upload from "../middleware/upload.js";

router.get('/',artscontrollers.getArts);
router.post('/',upload.single('artimage'),artscontrollers.registerArt);
router.put('/:id',upload.single('artimage'),artscontrollers.updateArt);
router.delete('/:id',artscontrollers.deleteArt);

export default router;
