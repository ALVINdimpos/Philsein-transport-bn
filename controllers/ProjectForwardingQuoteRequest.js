const db = require("../models/index");

// Get all ProjectForwardingQuoteRequest
exports.getProjectForwardingQuoteRequests = async (req, res, next) => {
  try {
    const quoteRequests = await db.ProjectForwardingQuoteRequest.findAll();
    res.status(200).json({ quoteRequests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving quote requests' });
  }
};

// Create a new Quote Request
exports.createQProjectForwardingQuoteRequest = (req, res, next) => {
  const host = req.hostname;
  const filePath = req.protocol + "://" + host + '/' + req?.file?.path;
  req.body = { ...req.body, packingListData: filePath }; // Remove the square brackets
  const projectForwardingQuoteRequest = new db.ProjectForwardingQuoteRequest({
      ...req.body,
  });
  projectForwardingQuoteRequest.save()
      .then(result => {
          res.status(201).json({
              message: 'ProjectForwardingQuoteRequest created successfully!',
              projectForwardingQuoteRequest: result
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              message: 'An error occurred while creating the ProjectForwardingQuoteRequest.'
          });
      });
}

// Delete Quote Request by Id
exports.deleteProjectForwardingQuoteRequest = async (req, res, next) => {
  const quoteRequestId = req.params.quoteRequestId;
  try {
    const quoteRequest = await db.ProjectForwardingQuoteRequest.findByPk(quoteRequestId);
    if (!quoteRequest) {
      return res.status(404).json({ message: "Quote Request not found!" });
    }
    await quoteRequest.destroy();
    console.log("Quote Request Deleted!");
    res.status(200).json({ message: "Quote Request deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting Quote Request' });
  }
};
