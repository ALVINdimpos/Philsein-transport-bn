const controller = require("../controllers/quoteRequestController.js");
const router = require("express").Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// all crud

// Create a new quote
router.post("/", upload.none(), controller.createQuoteRequest);

// Get all quotes

router.get("/", controller.getAllQuoteRequests);

// Get a single quote by ID

router.get("/:id", controller.getQuoteRequestById);

// delete a quote by ID

router.delete("/:id", controller.deleteQuoteRequest);

// update a quote by ID

router.put("/:id", controller.updateQuoteRequest);

module.exports = router;