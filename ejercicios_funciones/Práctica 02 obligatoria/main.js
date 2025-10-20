const pedirPalabras = () => {
    const palabras = [];
    let palabra;

    do{
        palabra = prompt('Introduce una palabra');
        if(palabra !== null && palabra.trim() !== '') {
            palabras.push(palabra);
        }
    }while(palabra !== null && palabra.trim() !== '');

    return palabras;
};

const contarPalabras = (array) => {
    const palabrasMap = new Map();

    array.forEach(palabra => {
        if(palabrasMap.has(palabra)) {
            palabrasMap.set(palabra, palabrasMap.get(palabra) + 1);
        }else {
            palabrasMap.set(palabra, 1);
        }
    });
    return palabrasMap;
};

console.log(contarPalabras(pedirPalabras()));
