const Socket = require('socket.io')().sockets;
const MessageService = require('./message');

class User {
    /**
     * @param  {SocketIO.Socket} socket
     */
    constructor(socket) {
        socket.on('disconnect', () => {
            console.log('user disconnected! ');
            socket.emit('chat message', 'user disconnected! ');
        });

        socket.on('chat message', (msg) => {
            const message = new MessageService.Message({
                message: msg,
                date: Date.now(),
            });
            MessageService.addMessage(message);

            socket.server.emit('chat message', message.toJSON());
        });
    }
}
module.exports = User;
