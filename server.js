var historial="--------------Historial--------------"; 
var c=0;
const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, () =>{
 console.log('servidor en el puerto 3000');
})
const { Socket } = require('socket.io');
const { isBooleanObject } = require('util/types');

io.on('connection', (socket)=> {
  console.log('new connection',socket.id);
  socket.on('mensaje', (mensaje)=> {
    c=c+1;

    historial= "\n" + historial;
    mensaje=''+ c.toString() + '. '+ mensaje;
    historial=mensaje + historial;
    historial= "\n" + historial;
    historial= "-------------------------------------" + historial;
    
    console.log(historial);
    io.sockets.emit('historial',historial);
  })
  socket.emit('historial',historial);
})
//ejecutar el servidor en la terminar con node server.js