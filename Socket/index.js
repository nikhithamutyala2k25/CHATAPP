import { Server } from 'socket.io';

const io = new Server(7000, {
    cors: {
        origin: 'http://localhost:3000',   
    },   
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    // connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    // socket.on('sendMessage', (data) => {
    //     const user = getUser(data.receiverId);
    //      io.to(user.socketId).emit('getMessages', data)      
    // })    

    //send message
socket.on('sendMessage', (data) => {
    const user = getUser(data.receiverId);
    if (user) {
        io.to(user.socketId).emit('getMessage', data);
    } else {
        console.log('User not found');
        // Handle the case where the user is not found, e.g., by sending an error message.
    }
});


    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })   
})
