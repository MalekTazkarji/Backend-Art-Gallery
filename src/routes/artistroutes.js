const express=require('express');
const router=express.Router();
const Artistscontroller=require("../controllers/artistscontrollers");
const upload=require('../middleware/upload');

router.get('/', Artistscontroller.getAll);
router.get('/search/:name',Artistscontroller.getname);
router.post('/',upload.single('image'),Artistscontroller.post);
router.put('/:id',upload.single('image'),Artistscontroller.put);
router.delete('/:id',Artistscontroller.delete);

module.exports=router;