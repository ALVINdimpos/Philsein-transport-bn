const controller = require('../controllers/quoteRequest');
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
// CRUD Routes /quoteRequest

router.post('/',upload.single("packingListData"),  controller.createQProjectForwardingQuoteRequest); 
router.get('/', controller.getProjectForwardingQuoteRequests); 
router.delete('/:quoteRequestId', controller.deleteProjectForwardingQuoteRequest);
module.exports=router;
