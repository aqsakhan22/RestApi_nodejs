function upload(req,res){
    console.log(`file name is`);
   if(req.file.filename) {
    res.status(201).json({
        message:"Image uploaded Successfully",
        url:req.file.filename
    });
   }    

   else{
    res.status(500).json({
        message:"Something went wrong",
    
    });
   }
};

module.exports={
upload:upload
};