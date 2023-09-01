const mongoose = require('mongoose');

const cargoEscortServiceSchema = new mongoose.Schema({
  cityOfDestination: String,
  typeOfPackaging: String,
  cityOfOrigin: String,
  goodsDescription: String,
  name: String,
  mobile: String,
  email: String,
  companyName: String,
  remarks: String
}, {
  timestamps: true
});

const CargoEscortService = mongoose.model('CargoEscortService', cargoEscortServiceSchema);

module.exports = CargoEscortService;
