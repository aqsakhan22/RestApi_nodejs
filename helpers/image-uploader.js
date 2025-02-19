const multer =require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        //cb callback function
        cb(null,'./uploads');

    },
    filename: function(req, file, cb) {
      //  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      
      cb(null, Date.now()  + path.extname(file.originalname));

    }
});
// Initialize upload middleware and add file size limit

   
  const fileFilter = (req,file,cb) =>{
   // console.log(`file type is ${file.mimetype}`);
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ){
        cb(null,true); 
       }

       else{
        cb(new Error("Unsupported File"),false);
       }

  }
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter:fileFilter
// 1MB file size limit
  }); // 'myFile' is the name attribute of the file input field
module.exports={
    upload:upload
};










