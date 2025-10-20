const obtenerPalabras = () => {
    const palabras = []
    let palabra;

    do {
        palabra = prompt('Introduce una palabra');
        if (palabra !== null && palabra !== '') {
            palabras.push(palabra);
        }
    } while (palabra !== null && palabra !== '');
    return palabras;
};

const palabrasSinRepetir = array => [...new Set(array)]; 

const palabrasOrdenadas = array => array.sort((a, b) => b.localeCompare(a));

const palabras = obtenerPalabras();
const palabrasSinDuplicados = palabrasSinRepetir(palabras);
const palabrasEnOrden = palabrasOrdenadas(palabrasSinDuplicados);

console.log(palabrasEnOrden);
