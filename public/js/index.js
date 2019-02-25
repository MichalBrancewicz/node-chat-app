const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'client',
        text: 'client to server, over'
    })
});

socket.on('newMessage', function (newMessageFromServer) {
    console.log(newMessageFromServer)
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})