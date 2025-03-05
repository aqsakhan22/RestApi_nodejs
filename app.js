const express=require('express');
const bodyParser=require('body-parser');

// instance of express
const app=express();
// const router=app.router();
const postRoute=require('./routes/post');
const userRoute=require('./routes/user');
const categoryRoute=require('./routes/category');
const imageRoute=require('./routes/images');
const testRoute=require('./routes/test');
app.use(bodyParser.json()); // Middleware to parse JSON
//localhost:3000/uploads/1739340075259.png with get access
app.get('/',function(req,res){
    console.log("You accessing node jsRest Api");
    res.send("Welcome to Node js Project");
});
app.use('/uploads',express.static('uploads'));
app.use("/posts",postRoute);
app.use("/user",userRoute);
app.use("/category",categoryRoute);
app.use("/association",testRoute);

//localhost:3000/images/upload
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFxc2ExQGdtYWlsLmNvbSIsInVzZXJJZCI6MywiaWF0IjoxNzM5MzM5NDIzfQ.kPaO-N7uMvgLo2rw_dUCcZ6KG-g8Ku6sqKUaidaZjH8
app.use('/images',imageRoute); //app.use is use for middleware 
module.exports=app;

