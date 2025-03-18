const express=require('express');
const usercontroller=require('../controllers/user.controller');
const router=express.Router();
//it means we have to acees url like this localhost:3000/post/
router.post("/signUp",usercontroller.signUp);
router.post("/login",usercontroller.login);
router.get("/:id",usercontroller.show);
router.get("/",usercontroller.index);
// router.get("/",postcontroller.index);
// router.patch("/:id",postcontroller.update);
// router.delete("/:id",postcontroller.delete);

module.exports=router;