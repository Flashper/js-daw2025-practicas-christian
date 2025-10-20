const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
];

productos.forEach(producto => {
    producto.precio*=1.10;
});

console.log(productos);