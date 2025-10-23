class Ordenador {
    constructor(marca, modelo, memoriaRam = 4, capacidadDiscoDuro = 512, pulgadasPantalla = 17) {
        if(typeof marca !== 'string') throw new Error('Marca debe ser de tipo string');
        this.marca = marca; 
        if(typeof modelo !== 'string') throw new Error('Modelo debe ser de tipo string');
        this.modelo = modelo;
        if(typeof memoriaRam !== 'number') throw new Error('Memoria RAM debe ser de tipo number');
        this.memoriaRam = memoriaRam;
        if(typeof capacidadDiscoDuro !== 'number') throw new Error('Capacidad de disco duro debe ser de tipo number');
        this.capacidadDiscoDuro = capacidadDiscoDuro;
        if(typeof pulgadasPantalla !== 'number') throw new Error('Pulgadas de la pantalla debe ser un valor de tipo number');
        this.pulgadasPantalla = pulgadasPantalla;
    }

    toString() {
        return `\nDetalles del ordenador:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nMemoria RAM: ${this.memoriaRam}\nCapacidad del disco duro: ${this.capacidadDiscoDuro}\nPulgadas de la pantalla: ${this.pulgadasPantalla}`;
    }
}

class OrdenadorPortatil extends Ordenador{
    constructor(marca, modelo, memoriaRam = 4, capacidadDiscoDuro = 256, pulgadasPantalla = 12, autonomia = 4) {
        super(marca, modelo, memoriaRam, capacidadDiscoDuro, pulgadasPantalla);
        if(typeof autonomia !== 'number') throw new Error('Autonomía debe ser de tipo number');
        this.autonomia = autonomia;
    }

    toString() {
        return super.toString()+`\nAutonomía: ${this.autonomia}`;
    }
}

probarClase('ordenador1', Ordenador, 'Dell', 'XPS 13');

probarClase('ordenador2', Ordenador, 'Lenovo', 'ThinkPad X1 Carbon', 16, 512, 14);

probarClase('ordenador3', Ordenador, 3, 'a', 1, 2, 3);

probarClase('ordenador4', Ordenador, 'a', 1, 2, 3, 4);

probarClase('ordenador5', Ordenador, 'a', 'b', 'C', 1, 2);

probarClase('ordenador6', Ordenador, 'a', 'b', 1, 'c', 2);

probarClase('ordenador7', Ordenador, 'a', 'b', 1, 2, 'c');

probarClase('ordenadorPortatil1', OrdenadorPortatil, 'ASUS', 'Zenbook 14', 16, 1024, 14, 12);

probarClase('ordenadorPortatil2', OrdenadorPortatil, 'ASUS', 'Zenbook 14', 16, 1024, 14, 'a');

function probarClase (nombre, Clase, ...args) {
    try{
        const objeto = new Clase(...args);
        console.log(`Prueba de: ${nombre}`)
        console.log(objeto.toString());
    }catch(error){
        console.error(error.message);
    }
}