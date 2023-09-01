const controller = require('../controllers/customClearanceService');
const router = require('express').Router();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '../uploads');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E4)
    const fname = file.originalname.slice(0,-4) + "-" + uniqueSuffix + ".pdf"
    req.file_name = fname;
    callback(null, fname);
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
router.post('/', (req, res, next) => {
  // Handle file size error
  upload.single("uploadPackingList")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          status: 400,
          message: `File too large, it should not be greater than ${5} MBs`
        });
      }
    } else if (err) {
      return res.status(500).json({
        status: 500,
        message: "Internal server error"
      });
    }
    
    // If no file size error, continue with your controller
    controller.createCustomClearanceService(req, res, next);
  });
}); // /customClearanceService
router.delete('/:customClearanceServiceId', controller.deleteCustomClearanceService); // /customClearanceService/:customClearanceServiceId
module.exports=router;