const controller = require('../controllers/contact');
const router = require('express').Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

// CRUD Routes /contact
router.get('/', controller.getQueries); // /contact
router.get('/:querryId', controller.getQuery); // /contact/:querryId
router.post('/', upload.none(), controller.createQuery); // /contact
router.delete('/:querryId', controller.deleteQuery); // /contact/:querryId

module.exports = router;