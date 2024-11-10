const express = require('express');
const router = express.Router();
const placesControllers = require('../../controllers/places-controllers');

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.get('/:id', placesControllers.getPlaceById);

router.post('/', placesControllers.createPlace);
router.patch('/:id', placesControllers.updatePlace);
router.delete('/:id', placesControllers.deletePlace);
module.exports = router;
