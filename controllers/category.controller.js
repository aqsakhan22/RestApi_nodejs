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




module.exports={

    index:index

}