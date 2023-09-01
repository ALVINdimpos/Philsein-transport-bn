const mongoose = require('mongoose');

const cargoPackagingAndLashingSchema = new mongoose.Schema({
  goodsDescription: String,
  name: String,
  email: String,
  mobile: String,
  remarks: String
}, {
  timestamps: true
});

const CargoPackagingAndLashing = mongoose.model('CargoPackagingAndLashing', cargoPackagingAndLashingSchema);

module.exports = CargoPackagingAndLashing;