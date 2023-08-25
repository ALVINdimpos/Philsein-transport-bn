const db = require("../models/index");

const CustomClearanceService = db.CustomClearanceService;

// CRUD Controllers

//get all customclearanceservices
exports.getCustomClearanceServices = (req, res, next) => {
  CustomClearanceService.findAll()
    .then((customclearanceservices) => {
      res
        .status(200)
        .json({ customclearanceservices: customclearanceservices });
    })
    .catch((err) => console.log(err));
};
//create a new customclearanceservice
exports.createCustomClearanceService = (req, res, next) => {
  const host = req.hostname;
  const filePath = req.protocol + "://" + host + '/' + req?.file?.path;
  req.body = { ...req.body, uploadPackingList: filePath }; 
  const customClearanceService = new db.CustomClearanceService({
      ...req.body,
  });
  customClearanceService.save()
      .then(result => {
          res.status(201).json({
              message: 'CustomClearanceService created successfully!',
              customclearanceservice: result
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({
              message: 'An error occurred while creating the CustomClearanceService.'
          });
      });
}

//get customclearanceservice by id
exports.getCustomClearanceService = (req, res, next) => {
  const customclearanceserviceId = req.params.customclearanceserviceId;
  CustomClearanceService.findByPk(customclearanceserviceId)
    .then((customclearanceservice) => {
      if (!customclearanceservice) {
        return res
          .status(404)
          .json({ message: "CustomClearanceService not found!" });
      }
      res.status(200).json({ customclearanceservice: customclearanceservice });
    })
    .catch((err) => console.log(err));
};
//delete customclearanceservice
exports.deleteCustomClearanceService = (req, res, next) => {
  const customclearanceserviceId = req.params.customclearanceserviceId;
  CustomClearanceService.findByPk(customclearanceserviceId)
    .then((customclearanceservice) => {
      if (!customclearanceservice) {
        return res
          .status(404)
          .json({ message: "CustomClearanceService not found!" });
      }
      return customclearanceservice.destroy();
    })
    .then((result) => {
      res.status(200).json({ message: "CustomClearanceService deleted!" });
    })
    .catch((err) => console.log(err));
};
