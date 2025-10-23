function Punto(x, y) {
    this.x = (typeof x === 'number' && !isNaN(x)) ? x : 0;
    this.y = (typeof y === 'number' && !isNaN(y)) ? y : 0;
}

Punto.prototype.cambiar = function (nuevaX, nuevaY) {
    this.x = (typeof nuevaX === 'number' && !isNaN(nuevaX)) ? nuevaX : 0;
    this.y = (typeof nuevaY === 'number' && !isNaN(nuevaY)) ? nuevaY : 0;
};

Punto.prototype.copia = function() {
    return new Punto(this.x, this.y);
};

Punto.prototype.suma = function(puntoDistinto) {
    if(!(puntoDistinto instanceof Punto)){
        throw new Error('El argumento debe ser de tipo Punto');
    }
    return new Punto(this.x + puntoDistinto.x, this.y + puntoDistinto.y);
};

let punto1 = new Punto('alpaca', 10);
console.log(`Punto1: ${punto1.x}, ${punto1.y}`);

punto1.cambiar(8, 'error');
console.log(`Punto1: ${punto1.x}, ${punto1.y}`);

punto1.cambiar(10, 5);
console.log(`Punto1: ${punto1.x}, ${punto1.y}`);

let punto2 = punto1.copia();
console.log(`Punto2: ${punto2.x}, ${punto2.y}`);

try {
    let punto3 = punto1.suma(punto2);
    console.log(`Punto3: ${punto3.x}, ${punto3.y}`);
}catch(error) {
    console.error(error.message);
}




