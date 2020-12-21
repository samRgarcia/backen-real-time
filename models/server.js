const express = require('express');
const http = require('http');
const socketio= require('socket.io');
const path = require('path');

const Sockets = require('./socket');

class Server {
    constructor(){
        this.app= express();
        this.port = process.env.PORT;

        this.server = http.createServer(this.app);
        //Configuracion del socket serve
        this.io = socketio(this.server,{/* */});
        
    }

    middlewares(){
       this.app.use(express.static(path.resolve(__dirname,'../public')));
    }

    cofigurarSockets(){
       new Sockets(this.io);
    }

    execute(){
        //Inicializar Middlewares
        this.middlewares();
        this.cofigurarSockets();
        this.server.listen(this.port,()=>{
            console.log('Server online',this.port)
        })
    }
}

module.exports = Server;