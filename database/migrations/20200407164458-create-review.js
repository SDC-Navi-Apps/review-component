'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      authorName: {
        type: Sequelize.STRING
      },
      authorAvatarUrl: {
        type: Sequelize.STRING
      },
      appId: {
        type: Sequelize.INTEGER
      },
      likes: {
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.REAL
      },
      hasReply: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      replyName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      replyBody: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};