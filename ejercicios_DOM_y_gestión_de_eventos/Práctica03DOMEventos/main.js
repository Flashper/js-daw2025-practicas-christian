document.addEventListener("DOMContentLoaded", () =>{
    const capa1 = document.getElementById("capa1");
    const capa2 = document.getElementById("capa2");

    capa1.addEventListener("dragstart", () => {
        capa1.style.opacity = 0.5;
    });

    capa2.addEventListener("dragover", (evento) => {
        evento.preventDefault();
    });

    capa2.addEventListener("dragenter", () => {
        capa2.style.backgroundColor = "red";
    });

    capa2.addEventListener("dragleave", () => {
        capa2.style.backgroundColor = "white";
    });

    capa1.addEventListener("dragend", () => {
        capa1.style.opacity = 1;
    });

    capa2.addEventListener("drop", (evento) => {
        evento.preventDefault();

        capa1.style.display = "none";
        capa2.textContent = "Lo has logrado";
    });
});