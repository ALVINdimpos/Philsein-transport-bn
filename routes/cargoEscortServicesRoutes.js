const express = require("express");
const router = express.Router();
const cargoEscortServicesController = require("../controllers/cargoEscortServicesController");

// POST request to create a new Cargo Escort Service
router.post("/", cargoEscortServicesController.createCargoEscortService);
// GET all the services for a specific user
router.get("/:userId", cargoEscortServicesController.getCargoEscortService);
// DELETE a Cargo Escort Service
router.delete("/:serviceId", cargoEscortServicesController.deleteCargoEscortService);

module.exports = router;