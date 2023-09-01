const ProjectForwardingQuoteRequest = require('../models/projectForwardingQuote');

// Get all ProjectForwardingQuoteRequests
exports.getProjectForwardingQuoteRequests = async (req, res, next) => {
  try {
    const quoteRequests = await ProjectForwardingQuoteRequest.find();
    res.status(200).json({ quoteRequests });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving quote requests' });
  }
};

// Create a new Quote Request
exports.createProjectForwardingQuoteRequest = (req, res, next) => {
  const filePath = "www.kagaba.live" + '/uploads/' + req?.file_name;
  req.body = { ...req.body, packingListData: filePath };
  const projectForwardingQuoteRequest = new ProjectForwardingQuoteRequest({
    ...req.body,
  });

  projectForwardingQuoteRequest
    .save()
    .then((result) => {
      res.status(200).json({
        message: 'ProjectForwardingQuoteRequest created successfully!',
        projectForwardingQuoteRequest: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: 'An error occurred while creating the ProjectForwardingQuoteRequest.',
      });
    });
};

// Delete Quote Request by Id
exports.deleteProjectForwardingQuoteRequest = async (req, res, next) => {
  const quoteRequestId = req.params.quoteRequestId;
  try {
    const quoteRequest = await ProjectForwardingQuoteRequest.findById(quoteRequestId);
    if (!quoteRequest) {
      return res.status(404).json({ message: "Quote Request not found!" });
    }
    await quoteRequest.remove();
    console.log("Quote Request Deleted!");
    res.status(200).json({ message: "Quote Request deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting Quote Request' });
  }
};
