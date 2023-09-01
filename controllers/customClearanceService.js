const CustomClearanceService = require('../models/customClearanceService');

// Get all CustomClearanceServices
exports.getCustomClearanceServices = async (req, res, next) => {
  try {
    const customClearanceServices = await CustomClearanceService.find();
    res.status(200).json({ customClearanceServices });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving CustomClearanceServices' });
  }
};

// Create a new CustomClearanceService
exports.createCustomClearanceService = (req, res, next) => {
  console.log(req.file_name)
  const filePath = "www.kagaba.live" + '/uploads/' + req?.file_name;
  req.body = { ...req.body, uploadPackingList: filePath };
  const customClearanceService = new CustomClearanceService({
    ...req.body,
  });

  customClearanceService
    .save()
    .then((result) => {
      res.status(200).json({
        message: 'CustomClearanceService created successfully!',
        customClearanceService: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: 'An error occurred while creating the CustomClearanceService.',
      });
    });
};

// Get a CustomClearanceService by ID
exports.getCustomClearanceService = async (req, res, next) => {
  const customClearanceServiceId = req.params.customclearanceserviceId;
  try {
    const customClearanceService = await CustomClearanceService.findById(customClearanceServiceId);
    
    if (!customClearanceService) {
      return res.status(404).json({ message: 'CustomClearanceService not found!' });
    }

    res.status(200).json({ customClearanceService });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving the CustomClearanceService' });
  }
};

// Delete a CustomClearanceService by ID
exports.deleteCustomClearanceService = async (req, res, next) => {
  const customClearanceServiceId = req.params.customclearanceserviceId;
  try {
    const customClearanceService = await CustomClearanceService.findById(customClearanceServiceId);

    if (!customClearanceService) {
      return res.status(404).json({ message: 'CustomClearanceService not found!' });
    }

    await customClearanceService.remove();
    console.log('CustomClearanceService Deleted!');
    res.status(200).json({ message: 'CustomClearanceService deleted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting the CustomClearanceService' });
  }
};
