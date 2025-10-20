const antes = document.getElementById("lista-array-antes");
const despues = document.getElementById("lista-array-despues");

let paises=["España", "Francia", "Alemania", "Italia"];

for(let pais of paises) {
    antes.innerHTML += `<li>${pais}</li>`;
}

paises.splice(0,1);

for(let pais of paises) {
    despues.innerHTML += `<li>${pais}</li>`;
}