'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //belongsTo : One-to-One or Many-to-One relationship. Foreign key is in the source model.
      Post.belongsTo(models.User);
      // many to many
      // belongsToMany -> Many-to-Many relationship. Requires a join table\
      // through is use for connecting model to post  like connecting PostCategory to post
      // Connect the category table to post table thgrough postcategory

      
      Post.belongsToMany(models.Category,{through:'PostCategory'});
      Post.hasMany(models.Comment);
      // Post can have many coments

      // how to check belongs using postman
      // 
     // Post.hasMany(models.Comment);
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};