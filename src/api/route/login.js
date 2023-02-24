const express = require('express');
const router = express.Router();

const { loginController: { loginUser,loginPage } } = require('../controller');
const { loginUser_validate: { login_Validation } } = require('../../middleware'); // validation

router.get('/login/',loginPage);
router.post('/login/',loginUser);

module.exports = router;