const CargoEscortService = require("../models/cargoescortservice");

// Create CargoEscortService
exports.createCargoEscortService = (req, res, next) => {
  const cargoEscortService = new CargoEscortService({
    cityOfDestination: req.body.cityOfDestination,
    typeOfPackaging: req.body.typeOfPackaging,
    cityOfOrigin: req.body.cityOfOrigin,
    goodsDescription: req.body.goodsDescription,
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    companyName: req.body.companyName,
    remarks: req.body.remarks
  });

  cargoEscortService
    .save()
    .then(result => {
      res.status(200).json({
        message: 'Cargo Escort Service created successfully!',
        cargoEscortService: result
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: 'An error occurred while creating the Cargo Escort Service.'
      });
    });
};

// Get all CargoEscortServices
exports.getAllCargoEscortServices = async function getAllCargoEscortServices(req, res, next) {
  try {
    const cargoEscortServices = await CargoEscortService.find();
    res.status(200).json({ cargoEscortServices });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An error occurred while fetching Cargo Escort Services.'
    });
  }
};

// Get a CargoEscortService by ID
exports.getCargoEscortService = async (req, res, next) => {
  const cargoEscortServiceId = req.params.cargoEscortServiceId;

  try {
    const cargoEscortService = await CargoEscortService.findById(cargoEscortServiceId);
    
    if (!cargoEscortService) {
      return res.status(404).json({ message: 'Cargo Escort Service not found!' });
    }

    res.status(200).json({ cargoEscortService });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An error occurred while fetching the Cargo Escort Service.'
    });
  }
};

// Delete a CargoEscortService by ID
exports.deleteCargoEscortService = async (req, res, next) => {
  const cargoEscortServiceId = req.params.cargoEscortServiceId;

  try {
    const cargoEscortService = await CargoEscortService.findById(cargoEscortServiceId);

    if (!cargoEscortService) {
      return res.status(404).json({ message: 'Cargo Escort Service not found!' });
    }

    await cargoEscortService.remove();

    console.log('Cargo Escort Service deleted successfully!');
    res.status(200).json({ message: 'Cargo Escort Service deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'An error occurred while deleting the Cargo Escort Service.'
    });
  }
};
