// imports always go first - if we're importing anything

const socket = io();

function setUserId(packet) {
    debugger;
    console.log(packet);
}

function runDisconnectMessage(packet) {
    debugger;
    console.log(packet);
}

// some event handlin -> these events are coming from the server
socket.addEventListener('connected', setUserId);
socket.addEventListener('user_disconnect', runDisconnectMessage);