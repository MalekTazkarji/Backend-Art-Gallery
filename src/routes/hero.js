const express = require("express");
const router = express.Router();
const heroController = require("../controllers/herocontroller");
const upload=require('../middleware/upload')
router.get("/heroAll", heroController.getAll);
router.get("/hero/img/:id", heroController.get);
router.post("/hero/post",upload.single('heroimg'),heroController.post);
router.put("/hero/update/:id",upload.single('image'),heroController.put);
router.delete("/hero/delete/:id", heroController.delete);

module.exports = router;
