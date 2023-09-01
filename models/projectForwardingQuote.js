const mongoose = require('mongoose');

const projectForwardingQuoteRequestSchema = new mongoose.Schema({
  countryOfOrigin: String,
  countryOfDestination: String,
  cityOfOrigin: String,
  cityOfDestination: String,
  shipmentType: String,
  cargoType: String,
  goodsDescription: String,
  name: String,
  mobile: String,
  email: String,
  packingListData: String,
  companyName: String,
  companySize: String,
  role: String,
  department: String,
  remarks: String
}, {
  timestamps: true
});

const ProjectForwardingQuoteRequest = mongoose.model('ProjectForwardingQuoteRequest', projectForwardingQuoteRequestSchema);

module.exports = ProjectForwardingQuoteRequest;
