const express = require('express');
const router = express.Router();

const { checkOptController: { check } } = require('../controller');
router.post('/checkOpt/',check);

module.exports = router;