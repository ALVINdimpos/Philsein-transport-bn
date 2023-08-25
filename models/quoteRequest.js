// models/quoteRequest.js

'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProjectForwardingQuoteRequest = sequelize.define('ProjectForwardingQuoteRequest', {
    countryOfOrigin: DataTypes.STRING,
    countryOfDestination: DataTypes.STRING,
    cityOfOrigin: DataTypes.STRING,
    cityOfDestination: DataTypes.STRING,
    shipmentType: DataTypes.STRING,
    cargoType: DataTypes.STRING,
    goodsDescription: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    packingListData: DataTypes.BLOB, 
    companyName: DataTypes.STRING,
    companySize: DataTypes.STRING,
    role: DataTypes.STRING,
    department: DataTypes.STRING,
    remarks: DataTypes.TEXT
  });

  return ProjectForwardingQuoteRequest;
};
