document.addEventListener("DOMContentLoaded", () => {
    
    document.addEventListener("keydown", (evento) => {
        const alt = evento.altKey;
        const teclaF12 = evento.key === "F12";
        if(alt && teclaF12) {
            cambiarFondo();
        }
    });
});

function cambiarFondo() {
    const fondo = document.getElementById("imagen");

    fondo.style.backgroundImage = "url('https://picsum.photos/200/300.jpg')";
}