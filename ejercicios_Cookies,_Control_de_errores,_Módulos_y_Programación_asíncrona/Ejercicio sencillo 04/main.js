import { suma, resta, multiplica, divide } from "./calculadora.js";

const a = document.getElementById("a");
const b = document.getElementById("b");
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", () => {
    const aInput = Number(a.value);
    const bInput = Number(b.value);

    document.getElementById("suma").textContent = suma(aInput, bInput);
    document.getElementById("resta").textContent = resta(aInput, bInput);
    document.getElementById("multiplica").textContent = multiplica(aInput, bInput);

    try {
        document.getElementById("divide").textContent = divide(aInput, bInput);
    }catch(e) {
        document.getElementById("divide").textContent = "Error: "+ e.message;
    }
});


