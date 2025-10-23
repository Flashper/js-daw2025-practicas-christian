function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.detalles = function() {
        return `Marca: ${this.marca}| Modelo: ${this.modelo}| Año: ${this.año}`
    }
}

Coche.prototype.encender = function() {
    return `El coche ${this.marca} ${this.modelo} ha sido encendido`;
}

let coche1 = new Coche("Opel", "Astra" , 2000);
let coche2 = new Coche("Pagani", "Zonda R", 2009);

console.log(coche1.detalles());
console.log(coche2.detalles());

console.log(coche1.encender());
console.log(coche2.encender());