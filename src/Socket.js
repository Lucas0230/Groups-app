


import { io } from "socket.io-client";

const SERVER = `http://localhost:3040`;

class Socket {

    constructor() {
        this.socketConnected = false;
        this.room = false;
    }

    middleware() {
        if (this.socketConnected) {
            return
        }
        this.connect();
    }

    connect() {

        this.socket = io.connect("http://localhost:3040", {
            transports: ['websocket'],
            secure: true, reconnection: true, rejectUnauthorized: false,
        });

        this.socket.on("connection", (user) => {
            console.log(`Usuário ${user} conectado!`);
            this.socketConnected = true;
        });


        this.socket.on("connect_error", (err) => {
            console.log(`Socket.io error: ${err}`);
        });

    }

    newMessage(callback) {
        this.socket.on("newMessage", (message) => {
            callback(message);
        });
    }

    async sendMessage({ message, room, userId, time, name }) {
        this.middleware();
        this.socket.emit("message", { message, room, userId, name, time });
    }

    join({ room }) {
        this.middleware();
        this.socket.emit('join', { room });
        this.room = room;
    }



}


export default new Socket();


// socket.on("newMessage", (err) => {
//     console.log(`TESTE CLIENTE`);
// });