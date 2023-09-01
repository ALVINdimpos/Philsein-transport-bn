const router = require("express").Router();
const path = require('path');
const fs = require("fs");

router.get("/:id", (req, res) => {
    const pdfFilePath = path.join(__dirname, "..", "..", "uploads", req.params.id);
  // Check if the file exists
  if (fs.existsSync(pdfFilePath)) {
    // Set response headers for PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${req.params.id}"`);

    // Stream the file to the response
    const fileStream = fs.createReadStream(pdfFilePath);
    fileStream.pipe(res);
  } else {
    // Handle the case where the file doesn't exist
    res.status(404).send('PDF not found');
  }
})

module.exports = router