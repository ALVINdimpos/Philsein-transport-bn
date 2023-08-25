const express = require('express');
const router = express.Router();
const cargopackagingandlashingController = require('../controllers/cargopackagingandlashingController');
// CRUD Routes
// Create a new Cargo Packaging and Lashing record
router.post('/', cargopackagingandlashingController.createCargoPackagingAndLashing);
// Get all Cargo Packaging and Lashing records
router.get('/', cargopackagingandlashingController.getCargoPackagingAndLashing);
// Delete a Cargo Packaging and Lashing record
router.delete('/:recordId', cargopackagingandlashingController.deleteCargoPackagingAndLashing);


module.exports = router;
