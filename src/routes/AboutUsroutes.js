const express=require('express');
const router=express.Router();
const About=require("../controllers/Aboutuscontroller");


router.get('/',About.getAll);
router.post('/',About.post);
router.put('/:id',About.put);
router.delete('/:id',About.delete);

module.exports=router;