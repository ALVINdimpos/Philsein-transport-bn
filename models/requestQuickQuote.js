const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  origin: String,
  destination: String,
  shipmentType: String,
  cargoType: String,
  goodsDescription: String,
  name: String,
  mobile: String,
  companyName: String,
  email: String,
  remarks: String
}, {
  timestamps: true
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;