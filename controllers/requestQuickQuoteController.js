// Import the Sequelize model
const db = require("../models/index");
const Quote = db.Quote;
// Create a new quote
async function createQuote(req, res) {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Retrieve all quotes
async function getAllQuotes(req, res) {
  try {
    const quotes = await Quote.findAll();
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
    const quote = await Quote.findByPk(quoteId);

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
    const [updatedCount] = await Quote.update(req.body, {
      where: { id: quoteId },
    });

    if (updatedCount === 0) {
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
    const deletedCount = await Quote.destroy({
      where: { id: quoteId },
    });

    if (deletedCount === 0) {
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
