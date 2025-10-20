
const numeros = [1,2,3,4,5,6,7,8,9];

function sumaIterativa (numeros) {

    let sumaIterator=0;

    for(let numero of numeros){
    sumaIterator+=numero;
    };
    return sumaIterator;
}

console.log(sumaIterativa(numeros));


function sumaRecursiva(numeros, indice = 0) {
    if(indice === numeros.length) {
        return 0;
    }
    return numeros[indice] + sumaRecursiva(numeros,indice + 1);
}

console.log(sumaRecursiva(numeros));

console.log('Pienso que la solución con el iterator es mucho más sencilla y entendible');