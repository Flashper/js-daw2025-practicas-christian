const btnNotificacion = document.getElementById("btnNotificacion");

console.log(btnNotificacion)

btnNotificacion.addEventListener("click", () => {
    Notification.requestPermission().then((resp) => {
        if (resp == "granted") {
            const n = new Notification("Notificación", {
                body: "Nueva notificación",
                icon: "video/notificaciones.png",
            });
        }
    });
});