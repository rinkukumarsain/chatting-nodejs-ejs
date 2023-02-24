const express = require('express');
const router = express.Router();

const { createUserController: { createUser } } = require('../controller');
const { createUser_validate: { createUser_Validation } } = require('../../middleware');
router.post('/createUser/',createUser_Validation,createUser);

module.exports = router;