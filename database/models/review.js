'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    authorName: DataTypes.STRING,
    authorAvatarUrl: DataTypes.STRING,
    appId: DataTypes.NUMBER,
    likes: DataTypes.NUMBER,
    body: DataTypes.STRING,
    rating: DataTypes.NUMBER,
    hasReply: DataTypes.BOOLEAN,
    replyName: DataTypes.STRING,
    replyBody: DataTypes.STRING,
  }, {});
  Review.associate = function(models) {
    // Review.belongsTo(User, {as: 'author_id_fkey', foreignKey: 'user_id'});
    // Review.hasOne(App, {as: 'app_id_fkey', foreignKey: 'app_id'});
  };
  return Review;
};