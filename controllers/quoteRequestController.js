const QuoteRequest = require('../models/quoteRequest');

// Create a new quote request
async function createQuoteRequest(req, res) {
  try {
    const quoteRequest = new QuoteRequest(req.body);
    await quoteRequest.save();
    res.status(200).json(quoteRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve all quote requests
async function getAllQuoteRequests(req, res) {
  try {
    const quoteRequests = await QuoteRequest.find();
    res.status(200).json(quoteRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve a single quote request by ID
async function getQuoteRequestById(req, res) {
  const quoteRequestId = req.params.id;

  try {
    const quoteRequest = await QuoteRequest.findById(quoteRequestId);

    if (!quoteRequest) {
      return res.status(404).json({ error: "Quote request not found" });
    }

    res.json(quoteRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a quote request by ID
async function updateQuoteRequest(req, res) {
  const quoteRequestId = req.params.id;

  try {
    const updatedQuoteRequest = await QuoteRequest.findByIdAndUpdate(
      quoteRequestId,
      req.body,
      { new: true }
    );

    if (!updatedQuoteRequest) {
      return res.status(404).json({ error: "Quote request not found" });
    }

    res.json({ message: "Quote request updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a quote request by ID
async function deleteQuoteRequest(req, res) {
  const quoteRequestId = req.params.id;

  try {
    const deletedQuoteRequest = await QuoteRequest.findByIdAndRemove(quoteRequestId);

    if (!deletedQuoteRequest) {
      return res.status(404).json({ error: "Quote request not found" });
    }

    res.json({ message: "Quote request deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createQuoteRequest,
  getAllQuoteRequests,
  getQuoteRequestById,
  updateQuoteRequest,
  deleteQuoteRequest,
};
