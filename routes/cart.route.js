const express = require('express');
const router = express.Router();

// Require the controllers 
const cart_controller = require('../controllers/cart.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', cart_controller.test);
router.post('/create', cart_controller.cart_create);
router.get('/all', cart_controller.cart_findAll);
router.put('/update', cart_controller.cart_update);
//router.get('/:id/:username', cart_controller.cart_findItem);

module.exports = router;