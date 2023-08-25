module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProjectForwardingQuoteRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      countryOfOrigin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      countryOfDestination: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cityOfOrigin: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cityOfDestination: {
        type: Sequelize.STRING,
        allowNull: true
      },
      shipmentType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cargoType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      goodsDescription: {
        type: Sequelize.STRING,
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
      packingListData: {
        type: Sequelize.BLOB, 
        allowNull: true
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      companySize: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProjectForwardingQuoteRequests');
  }
};
