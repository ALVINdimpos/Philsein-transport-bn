const controller = require("../controllers/requestQuickQuoteController");
const router = require("express").Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new quote
router.post("/", upload.none(), controller.createQuote);
// Get all quotes
router.get("/", controller.getAllQuotes);
// Get a single quote by ID
router.get("/:id", controller.getQuoteById);
// delete a quote by ID
router.delete("/:id", controller.deleteQuote);

module.exports = router;