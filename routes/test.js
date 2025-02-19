// route regrading post
const express=require('express');
const testcontroller=require('../controllers/test.controller');
const router=express.Router();
//it means we have to acees url like this localhost:3000/po
router.get("/:id",testcontroller.test);



module.exports=router;