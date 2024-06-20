const socket = io();

// Escuchar el historial de mensajes desde el servidor
socket.on('historial', function(data) {
    document.getElementById('idtextarear').innerHTML = data;
});

function mostrar() {
    let usuario = document.getElementById('idusuario').value;
    let mensaje = document.getElementById('idmensaje').value;

    if (usuario !== "" && mensaje !== "") {
        let mensajeCompleto = usuario + ": " + mensaje;
        document.getElementById('idmensaje').value = "";
        document.getElementById('idmensaje').focus();
        
        // Enviar el mensaje al servidor
        socket.emit('mensaje', mensajeCompleto);
        console.log(mensajeCompleto);
    }
}

// Añadir el evento de 'keypress' al campo de mensaje
document.getElementById('idmensaje').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el comportamiento predeterminado de la tecla Enter
        mostrar();
    }
});

//ingresar a la paginacliente por "localhost:3000" o "(IP del servidor):3000" Ej: "10.0.9.15:3000"