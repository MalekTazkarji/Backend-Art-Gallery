import express from "express" ;
const router=express.Router();
import Artistscontroller from "../controllers/artistscontrollers.js";
import upload from "../middleware/upload.js";

router.get('/', Artistscontroller.getArtists);
router.post('/',upload.single('image'),Artistscontroller.registerArtists);
router.put('/:id',upload.single('image'),Artistscontroller.updateArtists);
router.delete('/:id',Artistscontroller.deleteArtists);

export default router;
