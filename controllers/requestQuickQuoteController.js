const Quote = require('../models/requestQuickQuote');

// Create a new quote
async function createQuote(req, res) {
  try {
    const quote = new Quote(req.body);
    await quote.save();
    res.status(200).json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve all quotes
async function getAllQuotes(req, res) {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve a single quote by ID
async function getQuoteById(req, res) {
  const quoteId = req.params.id;

  try {
    const quote = await Quote.findById(quoteId);

    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update a quote by ID
async function updateQuote(req, res) {
  const quoteId = req.params.id;

  try {
    const updatedQuote = await Quote.findByIdAndUpdate(
      quoteId,
      req.body,
      { new: true }
    );

    if (!updatedQuote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    res.json({ message: "Quote updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a quote by ID
async function deleteQuote(req, res) {
  const quoteId = req.params.id;

  try {
    const deletedQuote = await Quote.findByIdAndRemove(quoteId);

    if (!deletedQuote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    res.json({ message: "Quote deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
};
