const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('newMessage', function (newMessageFromServer) {
    console.log(newMessageFromServer)
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})