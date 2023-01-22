const express=require('express');
const router=express.Router();
const artscontrollers=require('../controllers/artcontrollers.js')
const upload=require('../middleware/upload.js');

router.get('/',artscontrollers.getAll);
router.post('/',upload.single('artimage'),artscontrollers.post);
router.put('/:id',upload.single('artimage'),artscontrollers.put);
router.delete('/:id',artscontrollers.delete);

module.exports=router;
