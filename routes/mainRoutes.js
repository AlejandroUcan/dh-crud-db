const express = require('express');
const router = express.Router();

//Controller
const mainController = require('../controllers/mainController');

//Middleware
const guestMiddleware = require('../middlewares/guestMiddleware');

// Inicio
router.get('/', mainController.index);

// Inicio
router.get('/main', guestMiddleware, mainController.main);

// Acerca de
router.get('/about', guestMiddleware, mainController.about);

// Contacto
router.get('/contact', guestMiddleware, mainController.contact);

module.exports = router;