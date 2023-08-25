'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomClearanceService extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  CustomClearanceService.init(
    {
      customsAuthority: DataTypes.STRING,
      valueOfCargoInUSD: DataTypes.DECIMAL(10, 2),
      cargoType: DataTypes.STRING,
      goodsDescription: DataTypes.TEXT,
      name: DataTypes.STRING,
      mobile: DataTypes.STRING,
      email: DataTypes.STRING,
      uploadPackingList: DataTypes.BLOB,
      remarks: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'CustomClearanceService'
    }
  );
  return CustomClearanceService;
};
