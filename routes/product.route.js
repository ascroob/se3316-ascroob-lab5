const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.get('/all', product_controller.product_findAll);

router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.get('/:id/quantity', product_controller.product_amount);
router.put('/:id/update', product_controller.product_update);
//router.put('/:id/updaterating', product_controller.product_update_rating);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;