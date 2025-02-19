// route regrading post
const express=require('express');
const postcontroller=require('../controllers/post.controller');
const router=express.Router();
const checkAuthMiddleware=require('../middleware/check-auth');
//it means we have to acees url like this localhost:3000/post/
router.post("/",checkAuthMiddleware.checkAuth ,postcontroller.save);
router.get("/:id",postcontroller.show);
router.get("/",postcontroller.index);
router.patch("/:id",checkAuthMiddleware.checkAuth,postcontroller.update);
router.delete("/:id",checkAuthMiddleware.checkAuth,postcontroller.delete);

module.exports=router;