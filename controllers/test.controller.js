const models=require('../models');
async function test (req,res){
    // one to one A user has one  address or an addres belong to on user
    //One to many 1:m user has many post
    // many to many m:n a post belongs to many categories
    //  One to One
    // console.log(`id is ${req.params.id}`);
    //const user = await models.User.findByPk(req.params.id);
    // include is optional argument 
    // user has one address and address belong to one user
//   One to One
    // const user = await models.User.findByPk(req.params.id,{
    //     include:[models.Address],
    // }
    // );
     //const address = await models.Address.findByPk(2); 
    // const address = await models.Address.findByPk(1,{
    //     include:[models.User]
    // }); 

    // One To Many

// A USER HAS MANY POST
//  const user = await models.User.findByPk(req.params.id,
//      {
//      include:[models.Post]   
//      }
//     );
// A POST BELONGS TO USER
//  const post = await models.Post.findByPk(req.params.id,
//      {
//      include:[models.User]   
//      }
//     );

 // Many to Many 
 // A Post Belongs to Many categories
 // example A post belongs to Programming like Node js , java , 
 // 2 post jp hai us k andar jo category hai us 
    //   const post = await models.Post.findByPk(4,{
    //     include:[
    //         models.Category
    //     ]
    //   });
    // const category = await models.Category.findByPk(1,{
    //     include:[
    //         models.Post
    //     ]
    //   });
// Mant to many 
// Post has many comments
    // const postcomment = await models.Post.findByPk(3,{
    //     include:[
    //         models.Comment
    //     ]
    //   });
      const comment = await models.Comment.findByPk(1,{
        include:[
            models.Post
        ]
      });


 // post id 3 has two category 6,7 avaialble in
    res.status(200).json({
        data:comment
       // data:user,
      //data:address
    });
}
module.exports={
    test:test
};