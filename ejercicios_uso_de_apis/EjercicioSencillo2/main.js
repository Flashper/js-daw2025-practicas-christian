const video = document.querySelector("video");
const selector = document.getElementById("selectorVelocidad");

selector.addEventListener("change", () => {

    const velocidadSeleccionada = parseFloat(selector.value);

    video.playbackRate = velocidadSeleccionada;
});