const controller = require('../controllers/customClearanceService');
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
// CRUD Routes /customClearanceService
router.get('/', controller.getCustomClearanceServices); // /customClearanceService
router.get('/:customClearanceServiceId', controller.getCustomClearanceService); // /customClearanceService/:customClearanceServiceId
router.post('/',upload.single("uploadPackingList"), controller.createCustomClearanceService); // /customClearanceService
router.delete('/:customClearanceServiceId', controller.deleteCustomClearanceService); // /customClearanceService/:customClearanceServiceId
module.exports=router;