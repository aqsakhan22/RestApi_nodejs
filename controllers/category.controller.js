const models=require('../models');

// this is for gettting all post
function index(req,res){
    console.log("ALL Category");
models.Category.findAll().then(
    result =>{
        if(result != null){
            res.status(200).json(result);
        }
        else{
            res.status(500).json({
                'message':'Category Not Found'
            });
        }
    }
    
).catch(error=>{
    console.log(`Category ERR IS ${error}`);
    res.status(500).json({
        'message':'Something went wrong'
    });
});
 
}
function save(req,res){
    //console.log(`req is ${req.body}`);
const category = {
    name:req.body.title,
    
};
models.Category.findOne({where:{name:req.body.title}}).then(result =>{
     if(result){
        res.status(201).json({
            message:"Category Already Found No Need To Add"
        });

     }
     else{
     
        models.Category.create(category).then(result => {
            // console.log('post creation started');
              res.status(201).json({
                 message:"Category Added Succesfully",
                 category:result
              });
         }).catch(error => {
           //  console.log('post error');
             res.status(500).json({
                 message:"Something went wrong please try again",
                 error:error
              });
             
             
         });


     }

});



};

module.exports={

    index:index,
    save:save

}