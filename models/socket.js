class Sockets {
    constructor(io){
        this.io = io;
        this.socketEvents()
    }

    socketEvents(){
        //On conection
        this.io.on('connection', (socket) => {
            socket.emit('mensaje-bienvenida',"Bienvenido al server")
        
            socket.on('mensaje-to-serve',(data)=>{
                console.log(data)
                this.io.emit('mensaje-from-server',data)
            })
        
            
         });
    }

}

module.exports= Sockets;