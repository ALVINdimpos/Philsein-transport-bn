module.exports = (sequelize, DataTypes) => {
  const CargoPackagingAndLashing = sequelize.define('CargoPackagingAndLashing', {
    goodsDescription: DataTypes.TEXT,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    remarks: DataTypes.TEXT,
  });

  return CargoPackagingAndLashing;
};
