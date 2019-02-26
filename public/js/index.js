const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('greetNewjoiner', function (greeting) {
    console.log(greeting)
})

socket.on('announceNewjoiner', function(announcement) {
    console.log(announcement)
})

socket.on('newMessage', function (newMessageFromServer) {
    console.log(newMessageFromServer)
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})