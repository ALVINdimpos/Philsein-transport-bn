const controller = require('../controllers/contact');
const router = require('express').Router();

// CRUD Routes /contact
router.get('/', controller.getQuerries); // /contact
router.get('/:querryId', controller.getQuerry); // /contact/:querryId
router.post('/', controller.createQuerry); // /contact
router.delete('/:querryId', controller.deleteQuerry); // /contact/:querryId

module.exports = router;