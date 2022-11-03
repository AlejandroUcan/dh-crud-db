const express = require('express');
const router = express.Router();

// Controller
const clientController = require('../controllers/clientController');

router.get('/list', clientController.list);
router.get('/details/:id', clientController.details);
router.get('/last', clientController.last);

module.exports = router;