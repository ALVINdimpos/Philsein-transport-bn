'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CargoEscortService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CargoEscortService.init({
    cityOfDestination: DataTypes.STRING,
    typeOfPackaging: DataTypes.STRING,
    cityOfOrigin: DataTypes.STRING,
    goodsDescription: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    companyName: DataTypes.STRING,
    remarks: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CargoEscortService',
  });
  return CargoEscortService;
};