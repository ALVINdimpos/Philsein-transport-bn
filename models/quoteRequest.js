// models/quoterequest.js

module.exports = (sequelize, DataTypes) => {
  const QuoteRequest = sequelize.define("QuoteRequest", {
    destination: DataTypes.STRING,
    packagingType: DataTypes.STRING,
    origin: DataTypes.STRING,
    goodsDescription: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    companyName: DataTypes.STRING,
    remarks: DataTypes.TEXT,
  });

  return QuoteRequest;
};
