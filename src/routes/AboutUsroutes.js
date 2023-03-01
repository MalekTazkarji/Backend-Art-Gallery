import express from "express" ;
const router=express.Router();
import About from '../controllers/Aboutuscontroller.js';


router.get('/',About.getAboutUS);
router.put('/:id',About.updateAboutUs);

export default router;