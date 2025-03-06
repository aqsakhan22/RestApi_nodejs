const express=require('express');
const categoryController = require('../controllers/category.controller');
const router=express.Router();
router.get("/",categoryController.index);
router.post("/addCategory",categoryController.save);
module.exports=router;