'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CustomClearanceServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customsAuthority: {
        type: Sequelize.STRING,
        allowNull: true
      },
      valueOfCargoInUSD: {
        type: Sequelize.DECIMAL(10, 2), // Adjust precision and scale as needed
        allowNull: true
      },
      cargoType: {
        type: Sequelize.STRING
      },
      goodsDescription: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      uploadPackingList: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      remarks: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CustomClearanceServices');
  }
};
