const socket = require('socket.io')

const { chat: { insertUser1Chat, insertUserChat } } = require('../api/services');
exports.socketFun = async (server) => {
    const io = socket(server, {
        cors: { origin: '*' }
    });
    let name;
    let room

    io.on('connection', (socket) => {
        console.log(socket.id)
        console.log('new user connected');

        socket.on('joining msg', (username, roomCode) => {
            name = username;
            room =roomCode;
            io.emit('chat message', `---${name} joined the chat---`);
            socket.join(room);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
            io.emit('chat message', `---${name} left the chat---`);

        });
        socket.on('chat message', (msg,roomCode) => {
            console.log(msg, "roomcode")
            console.log(roomCode,">>>>>>>>>>room")
            io.to(roomCode).emit('chat message', msg);         //sending message to all except the sender
        });
    });
};