const express = require('express');
const router = express.Router();

const { chatController: { user1Chat,userChat,getChat,deleteChat,chatPage } } = require('../controller');
const { userAuth: { isAuth } } = require('../auth');

router.get('/chat/',isAuth,chatPage);
router.post('/user/insertUser1Chat/',isAuth,user1Chat);
router.post('/user/insertUserChat/',isAuth,userChat);
router.get('/user/getChat/',isAuth,getChat);
router.get('/user/deleteUserChat/:_id',isAuth,deleteChat);

module.exports = router;