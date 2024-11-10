const express = require('express');
const router = express.Router();
const placesRoutes = require('./places-routes');
const userRoutes = require('./user-routes');

router.use('/places', placesRoutes);
router.use('/users', userRoutes);

module.exports = router;
