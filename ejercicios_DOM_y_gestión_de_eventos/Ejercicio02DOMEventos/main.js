const posicion = document.getElementById("ratonPos");

document.addEventListener("mousemove", (event) => {
    const x= event.clientX;
    const y = event.clientY;

    posicion.textContent = `x: ${x}, y: ${y}`;
});