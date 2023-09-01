const controller = require("../controllers/quoteRequestController.js");
const router = require("express").Router();

// all crud

// Create a new quote
router.post("/", controller.createQuoteRequest);

// Get all quotes

router.get("/", controller.getAllQuoteRequests);

// Get a single quote by ID

router.get("/:id", controller.getQuoteRequestById);

// delete a quote by ID

router.delete("/:id", controller.deleteQuoteRequest);

// update a quote by ID

router.put("/:id", controller.updateQuoteRequest);

module.exports = router;