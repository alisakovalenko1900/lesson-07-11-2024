const express = require('express');
const router = express.Router();
const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/user-routes');

router.use('/places', placesRoutes);
router.use('/users', userRoutes);

module.exports = router;
