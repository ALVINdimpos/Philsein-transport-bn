const express = require('express');
const router = express.Router();
const cargopackagingandlashingController = require('../controllers/cargopackagingandlashingController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
// CRUD Routes
// Create a new Cargo Packaging and Lashing record
router.post('/', upload.none(), cargopackagingandlashingController.createCargoPackagingAndLashing);
// Get all Cargo Packaging and Lashing records
router.get('/', cargopackagingandlashingController.getCargoPackagingAndLashing);
// Delete a Cargo Packaging and Lashing record
router.delete('/:recordId', cargopackagingandlashingController.deleteCargoPackagingAndLashing);


module.exports = router;
