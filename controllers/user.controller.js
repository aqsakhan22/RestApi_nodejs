const models= require('../models');
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken');
const refreshTokens = {};
require("dotenv").config();

function signUp(req,res){
    //console.log(`email is ${req.body.email}`);
//console.log(`signup user data is ${req.body.email} `);
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
    //console.log('signup screen error is ')
    //console.log(error);
    res.status(500).json({
        message:"Something went wrong"
    });
});







    



}

function login(req,res){
 

    
models.User.findOne({where:{email:req.body.email}})
    .then(user=>{
        //const expiresIn = 7 * 24 * 60 * 60; 
        if(user == null){
            res.status(401).json({
                'message':'Invalid Credentials'
            });
        }
        else{
           // const newToken=generateTokens(user);
            //console.log(`NEW Token is ${JSON.stringify(newToken)}`);            
     bcryptjs.compare(req.body.password,user.password,function(err,result){
        if(result){
            //console.log(`JWT is ${user.id} ${user.email}`);
            const token= jwt.sign( 
                {
                    email: user.email,
                    userId:user.id
                },
                process.env.JWT_KEY,
                //{expiresIn : '1h'},
                function(err,token)
                {
                    //console.log(`token err is ${err} ${process.env.JWT_KEY}`);
                //console.log(`jwt token is EMAIL ${user.email} ID ${user.id} TOKEN ${token}`);
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


function generateTokens(user) {
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id },process.env.JWT_KEY, { expiresIn: '7d' });

    // Store the refresh token in the database or in-memory store
    refreshTokens[refreshToken] = user.id;

    return { accessToken, refreshToken };
}

function logout(req,res){
    models.User.findOne({where:{email:req.body.email}})
    .then(user=>{
        if(user == null){
            res.status(401).json({
                'message':'Invalid Credentials'
            });
        }
        else{
            // console.log(`JWT is ${user.id} ${user.email}`);
            // const token= jwt.sign( 
            //     {
            //         email: user.email,
            //         userId:user.id
            //     },
            //     process.env.JWT_KEY,
            //     function(err,token)
            //     {
            //         //console.log(`token err is ${err} ${process.env.JWT_KEY}`);
            //     //console.log(`jwt token is EMAIL ${user.email} ID ${user.id} TOKEN ${token}`);
            //        res.status(200).json(
            //         {
            //         message:'Autientication successfull',
            //         token:token
            //        }
            //     );
            //     }
            // );

               res.redirect('/');
               // remove that user token credentials which issaved in local storage or any other storage
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