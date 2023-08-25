// models/Contact.js

module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING
      },
      subject: {
        type: DataTypes.STRING
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    return Contact;
  };
  