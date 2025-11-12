const btnDivide = document.getElementById("btnDivide");
const mensaje = document.getElementById("mensaje");

btnDivide.addEventListener("click", () => {
    try {
        const a = Number(document.getElementById("a").value);
        const b = Number(document.getElementById("b").value);
        mensaje.textContent = divide(a, b);
    } catch (e) {
        console.log("Error", e.message);
    }
});

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }

    return a / b;
}
