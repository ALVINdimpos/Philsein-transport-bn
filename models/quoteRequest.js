const mongoose = require('mongoose');

const quoteRequestSchema = new mongoose.Schema({
  destination: String,
  packagingType: String,
  origin: String,
  goodsDescription: String,
  name: String,
  mobile: String,
  email: String,
  companyName: String,
  remarks: String
}, {
  timestamps: true
});

const QuoteRequest = mongoose.model('QuoteRequest', quoteRequestSchema);

module.exports = QuoteRequest;
