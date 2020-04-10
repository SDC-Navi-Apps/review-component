'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // User.hasMany(App, {as: 'author_id_fkey', foreignKey: 'user_id'});
    // User.hasMany(Review, {as: 'app_id_fkey', foreignKey: 'app_id'});
  };
  return User;
};