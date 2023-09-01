const mongoose = require('mongoose');

const customClearanceServiceSchema = new mongoose.Schema({
  customsAuthority: String,
  valueOfCargoInUSD: String,
  goodsDescription: String,
  name: String,
  mobile: String,
  email: String,
  uploadPackingList: String,
  remarks: String
}, {
  timestamps: true
});

const CustomClearanceService = mongoose.model('CustomClearanceService', customClearanceServiceSchema);

module.exports = CustomClearanceService;