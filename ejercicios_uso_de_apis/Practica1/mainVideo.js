const cuerpo = document.getElementById("cuerpo");
const video = document.getElementById("video");
let mostrarDuracion = false;

video.addEventListener("click", () => {
    video.paused ? video.play() : video.pause();
});

video.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    if (!mostrarDuracion) {
        const minutos = Math.floor(video.duration / 60);
        const segundos = Math.floor(video.duration % 60);

        let p = document.createElement("p");

        p.textContent = `Duración: ${minutos}:${segundos}`;

        cuerpo.appendChild(p);

        mostrarDuracion = true;
    }
});