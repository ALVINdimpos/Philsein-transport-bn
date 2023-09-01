const mongoose = require('mongoose');

const equipmentRentalSchema = new mongoose.Schema({
  goodsDescription: String,
  name: String,
  email: String,
  mobile: String,
  uploadPackingList: String,
  remarks: String
}, {
  timestamps: true
});

const EquipmentRental = mongoose.model('EquipmentRental', equipmentRentalSchema);

module.exports = EquipmentRental;
