const jwt =require('jsonwebtoken');
function checkAuth(req,res,next){
   // console.log("checkAuth Started");
    try{
        //console.log(`token is ${req.headers.authorization.split(" ")[1]} `);
    const token= req.headers.authorization.split(" ")[1];
    const  decodedToken=jwt.verify(token,process.env.JWT_KEY);
    req.userData=decodedToken;
    console.log(req.userData);
    next(); // next middlware
    }
    catch(error){
        return  res.status(401).json({
            message:"Invalid or expired token",
             error:error
        })
    }


}
module.exports={
    checkAuth:checkAuth
}