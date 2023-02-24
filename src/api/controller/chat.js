
const { chat:{ insertUser1Chat,insertUserChat,getChat,deleteUserChat } } = require('../services');
// chat page 
exports.chatPage = (req,res)=>{
   // console.log('Cookies: ', req.cookies)
    res.render("chat")
}

exports.userChat = async(req,res)=>{   // user ==> self 
    try {
        const getRes = await insertUserChat(req);
        res.status(200).json(getRes);
    } catch (error) {
        console.log(error);
        throw error;
    };
};

exports.user1Chat = async(req,res)=>{ // user1 ==> first user 
    try {
        const getRes = await insertUser1Chat(req);
        res.status(200).json(getRes);
    } catch (error) {
        console.log(error);
        throw error;
    };
};
// get chat 
exports.getChat = async(req,res)=>{ // user1 ==> first user 
    try {
        const getRes = await getChat(req);
        res.status(200).json(getRes);
    } catch (error) {
        console.log(error);
        throw error;
    };
};

// delete chat 
exports.deleteChat = async(req,res)=>{
    try {
        const getRes = await deleteUserChat(req);
        res.status(200).json(getRes);
    } catch (error) {
        console.log(error);
        throw error;
    };
};
