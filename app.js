const express = require('express')
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors')
const User = require('./user');
const messageRoute = require('./routes/message')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use(cors())
app.use('/public', express.static('public'))
app.use('/messages', messageRoute)

io.on('connection', (socket) => new User(socket));

http.listen(3000, () => {
    console.log('listening on :3000');
});
