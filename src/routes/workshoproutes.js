const express=require('express');
const router=express.Router();
const workshopscontroller=require("../controllers/workshopcontrollers");
const upload=require('../middleware/upload');

router.get('/', workshopscontroller.getAll);
router.post('/',upload.single('image'),workshopscontroller.post);
router.put('/:id',upload.single('image'),workshopscontroller.put);
router.delete('/:id',workshopscontroller.delete);

module.exports=router;