const models= require('../models');
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken');

function signUp(req,res){
console.log(`signup user data is ${req.body.email} `);
models.User.findOne({where:{email:req.body.email}}).then(
    result =>{
 if(result){
    res.status(409).json({
        message:" Email Already Exist"
    });
 }

 else{
    
bcryptjs.genSalt(10,function(err,salt){
    // dalt is use for add the string at the end of password 
    bcryptjs.hash(req.body.password,salt,function(err,hash){
        const user={
            name:req.body.name,
            email:req.body.email,
            password:hash
        };
        models.User.create(user).then(result =>{
            // console.log(`token is ${result}`);
            res.status(201).json({
               message:"User Crerated Successfully",
               user:result
            });
       }).catch(error =>{
//console.log(error);
           res.status(500).json({
               message:"Something went wrong"
           });
       });
    
    });
    
       });


 }
    }
).catch(error =>{
    console.log('signup screen error is ')
    console.log(error);
    res.status(500).json({
        message:"Something went wrong"
    });
});







    



}

function login(req,res){

models.User.findOne({where:{email:req.body.email}})
    .then(user=>{
        if(user == null){
            res.status(401).json({
                'message':'Invalid Credentials'
            });
        }
        else{
     bcryptjs.compare(req.body.password,user.password,function(err,result){
        if(result){
            const token= jwt.sign(
                {
                    email: user.email,
                    userId:user.id
                },
                process.env.JWT_KEY,
                function(err,token)
                {
                console.log(`jwt token is ${token}`);
                   res.status(200).json(
                    {
                    message:'Autientication successfull',
                    token:token
                   }
                );
                }
            );

        }
        else{

            res.status(401).json(
                {
                message:'Invalid Credentials',
               }
            );

        }
     });


        }
    })
    .catch(error=>{
        res.status(500).json(
            {
            message:'Something went wrong',
           }
        );
    });

}





module.exports= {
    signUp:signUp,
    login:login
}