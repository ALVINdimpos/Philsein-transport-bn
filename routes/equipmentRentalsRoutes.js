const equipmentRentalsController = require('../controllers/equipmentRentalsController');
const router = require('express').Router();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E4)
    callback(null, file.originalname.slice(0,-4) + "-" + uniqueSuffix + ".pdf");
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// CRUD Routes
// Create a new Equipment Rental
router.post('/',upload.single("uploadPackingList"), equipmentRentalsController.createEquipmentRental);
// Get all Equipment Rentals
router.get('/', equipmentRentalsController.getEquipmentRentals);
// Delete an Equipment Rental
router.delete('/:equipmentRentalId', equipmentRentalsController.deleteEquipmentRental);

module.exports = router;
