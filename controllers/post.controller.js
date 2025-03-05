const models=require('../models');
const validator=require('fastest-validator');
function save(req,res){
    //console.log(`req is ${req.body}`);
const post = {
    title:req.body.title,
    content:req.body.content,
    imageUrl:req.body.image_url,
    categoryId:req.body.category_id ,
    userId:req.userData.userId
};
//console.log(post);
const schema={
title:{type:"string",optional:false,max:"100"},
content:{type:"string",optional:false,max:"500"},
//categoryId:{type:"number",optional:false}
}; 

const v=new validator();
const validationresponse=v.validate(post,schema);
if(validationresponse !== true){

//console.log("*");
return res.status(400).json({
    message:'validation failed',
    errors:validationresponse
});

}

models.Category.findByPk(req.body.category_id)
.then(result => {
   if(result){
    models.Post.create(post).then(result => {
       // console.log('post creation started');
         res.status(201).json({
            message:"Post Created Succesfully",
            post:result
         });
    }).catch(error => {
        console.log('post error');
        res.status(500).json({
            message:"Something went wrong please try again",
            error:error
         });
        
        
    });

   }
   else{
    res.status(404).json({
        'message':'CategoryId Invalid'
    });
   }
}).catch(error=>{});
    

};


function show(req,res){

const id=req.params.id;

models.Post.findByPk(id,{
include:[models.Category,models.User]

}).then(
    // this post belongs to which category
    result => {
        console.log(`result is ${result}`);
        if(result){
            res.status(200).json(result);
        }
        else{
            res.status(404).json({
                'message':'Post Not Found'
            });
        }
     

    }
).catch(error => {
   // console.log(`err is ${error}`);
    res.status(500).json(
        {
            message:'Something going wrong'
        }
    );
}); //find by primary key

};

// this is for gettting all post
function index(req,res){
    console.log("ALL POST");
models.Post.findAll().then(
    result =>{
        if(result != null){
            res.status(200).json(result);
        }
        else{
            res.status(500).json({
                'message':'Post Not Found'
            });
        }
    }
).catch(error=>{
    console.log(`POST ERR IS ${error}`);
    res.status(500).json({
        'message':'Something went wrong'
    });
});
 
}

function update(req,res){
    const id=req.params.id;
    const UpdatedPost = {
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.image_url,
        categoryId:req.body.category_id ,
    };
    const userId=req.userData.userId;
    console.log(UpdatedPost);
    const schema={
        title:{type:"string",optional:false,max:"100"},
        content:{type:"string",optional:false,max:"500"},
        categoryId:{type:"number",optional:false
            
        }
        };
        const v=new validator();
        const validationresponse=v.validate(UpdatedPost,schema);
        if(validationresponse !== true){
        
        
        return res.status(400).json({
            message:'validation failed',
            errors:validationresponse
        });
        
        }

    models.Category.findByPk(req.body.category_id)
    .then(result=>{
       if(result)
       {
models.Post.update(UpdatedPost,{where:{id:id,userId:userId}}).then(result=>{
console.log(`updated post is ${result}`);
res.status(200).json({
        'message':"Post Updated Successfully",
         post:UpdatedPost
       });

    }).catch(error => {

        res.status(500).json({
            message:'Something went wrong'
        });

    });       
       }
       else{
       res.status(404).json({
            message:'Category Id Not Found'
        });
       
       
       }
    })
    .catch(error=>{res.status(500).json({
            message:'Something went wrong'
        });});

    
}


function deletePost(req,res){
    const id=req.params.id;
    const userId=req.userData.userId;

    models.Post.destroy({where:{id:id,userId,userId}}).then(result=>{
        console.log(`result is ${result}`);
        if(result != 0){
         
            res.status(200).json({
                'message':"Post Deleted Successfully",
                 post:result
               });
        }
        else{
            res.status(404).json({
                'message':"Post Not Found",
                 post:result
               });
        }



    }).catch(error => {

        res.status(500).json({
            message:'Something went wrong'
        });

    });
}

function sample(res,req){
    models.Post.findAll().then(result=>{}).catch(error => {});
}


module.exports={
    save : save,
    show:show,
    index:index,
    update:update,
    delete:deletePost
    

}