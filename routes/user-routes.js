const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/users');

router.get('/', UsersControllers.getAllUsers);
router.get('/:id', UsersControllers.getUserById);

module.exports = router;
