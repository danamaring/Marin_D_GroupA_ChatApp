// imports always go first - if we're importing anything
import ChatMessage from "./modules/ChatMessage.js";

const socket = io();
    //   popUp = document.querySelector('.popUp'),
    //   closePopUp = document.querySelector('.popupShow'),
    //   usernameSubmit = document.querySelector('#usernameSubmit');

// function hidePopUp(){
//     // event.preventDefault();
//     popUp.classList.add('popupHide');
// }


function setUserId({sID, message}) {
    //debugger;
    vm.socketID = sID;
}

function runDisconnectMessage(packet) {
    //debugger;
    console.log(packet);
}

function appendNewMessage(msg) {
    // take the incoming message and push it into the Vue instance 
    // into the messages array
    vm.messages.push(msg);
}


// this is our main Vue instance
const vm = new Vue({
    data: {
        socketID: "",      
        messages: [],
        message: "",
        username: "",
        isHidden: false
    },

    methods: {
        dispatchUsername() {
            console.log('username has been set');
            // socket.emit('chat_username', {
            //     name: this.nickName || "anonymous"
            // })
        },

        dispatchMessage() {
            // emit a message event and send the message to the server
            console.log('handle send message');

            socket.emit('chat_message', { 
                content: this.message,
                name: this.username || "anonymous"
                // || is called a double pipe operator or an "or" operator
                // if this.username is set, use it as the value
                // or just make name "anonymous"
            })

            // this.username = "";
            this.message = "";
        }

    },

    components: {
        newmessage: ChatMessage
    },

    mounted: function() {
        console.log('mounted');
    }
}).$mount("#app");


// some event handling -> these events are coming from the server
socket.addEventListener('connected', setUserId);
socket.addEventListener('user_disconnect', runDisconnectMessage);
socket.addEventListener('new_message', appendNewMessage);
// usernameSubmit.addEventListener("click", hidePopUp);
