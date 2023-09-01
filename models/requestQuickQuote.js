'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote.init({
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    shipmentType: DataTypes.STRING,
    cargoType: DataTypes.STRING,
    goodsDescription: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    remarks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};