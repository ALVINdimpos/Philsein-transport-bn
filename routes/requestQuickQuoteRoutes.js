const controller = require("../controllers/requestQuickQuoteController");
const router = require("express").Router();

// Create a new quote
router.post("/", controller.createQuote);
// Get all quotes
router.get("/", controller.getAllQuotes);
// Get a single quote by ID
router.get("/:id", controller.getQuoteById);
// delete a quote by ID
router.delete("/:id", controller.deleteQuote);

module.exports = router;