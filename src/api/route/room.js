const express = require('express');
const router = express.Router();

const { roomController: { createRoom } } = require('../controller');
const { userAuth: { isAuth } } = require('../auth');
//const { createUser_validate: { createUser_Validation } } = require('../../middleware');
router.post('/user/createRoom/',isAuth,createRoom);

module.exports = router;