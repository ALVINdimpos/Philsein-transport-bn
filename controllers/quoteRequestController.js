const db = require("../models/index");
const QuoteRequest = db.QuoteRequests;
// Create a new quote request
async function createQuoteRequest(req, res) {
  try {
    const quoteRequest = await QuoteRequest.create(req.body);
    res.status(201).json(quoteRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve all quote requests
async function getAllQuoteRequests(req, res) {
  try {
    const quoteRequests = await QuoteRequest.findAll();
    res.json(quoteRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve a single quote request by ID
async function getQuoteRequestById(req, res) {
  const quoteRequestId = req.params.id;

  try {
    const quoteRequest = await QuoteRequest.findByPk(quoteRequestId);

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
    const [updatedCount] = await QuoteRequest.update(req.body, {
      where: { id: quoteRequestId },
    });

    if (updatedCount === 0) {
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
    const deletedCount = await QuoteRequest.destroy({
      where: { id: quoteRequestId },
    });

    if (deletedCount === 0) {
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
