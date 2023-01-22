const express = require('express');
const router = express.Router();
const Showscontrollers = require("../controllers/showscontrollers");
const upload=require('../middleware/upload')





router.get('/', Showscontrollers.getAll);
router.post('/', upload.single('image'), Showscontrollers.post);
router.put('/:id',upload.single('image'), Showscontrollers.put);
router.delete('/:id', Showscontrollers.delete);

module.exports = router;