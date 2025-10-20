let arrayCombinacion = generarCombinacion();

let mapCombinacion = new Map();

for(let i=0;i<arrayCombinacion.length;i++) {
    mapCombinacion.set(`Combinación ${i+1}`,arrayCombinacion[i]);
}

console.log(mapCombinacion);

function generarCombinacion() {

    const combinaciones=[];

    for (let i = 0; i < 50; i++) {
        let combinacion = new Set();

        while (combinacion.size < 6) {
            let numero = Math.floor(Math.random() * 49) + 1;
            combinacion.add(numero);
        }

        combinaciones.push(Array.from(combinacion));
    }
    return combinaciones;
}
