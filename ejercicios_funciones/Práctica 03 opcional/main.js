const filtro = (array,callback)=> array.map(callback);

const duplicar = num => num * 2;
const numeros = [1, 2, 3, 4, 5, 6];

const palabrasMinusculas = palabra => palabra.toUpperCase();
const palabras = ["ratón", "torre", "teclado", "monitor"];

const factorial = num => {
    let numero=1;
    for(let i= num; i > 1; i--){
    numero *= i;
    }
    return numero;
}
const numeros2 = [10, 9, 8, 7, 6, 5];


console.log(filtro(numeros, duplicar));
console.log(filtro(palabras, palabrasMinusculas));
console.log(filtro(numeros2, factorial));