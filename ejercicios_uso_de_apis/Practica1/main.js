const mostrarCuenta = document.getElementById("mostrarCuenta");

const espera = tiempoEnMs => {
    return new Promise(resolve => {
        setTimeout(resolve, tiempoEnMs);
    });
};

async function cuentaAtras() {
    for (let i = 5; i >= 0; i--) {
        mostrarCuenta.textContent = i;
        await espera(1000);

        if (i == 0) {
            Notification.requestPermission().then((respuesta) => {
                if (respuesta == "granted") {
                    const notificacion = new Notification("Notificación nueva", {
                        body: "Clica para ver el vídeo",
                        icon: "img/notificaciones.png",
                    });

                    notificacion.addEventListener("click", () => {
                        window.open("indexVideo.html");
                    });
                }
            });
        }
    }
}

cuentaAtras();