let libro = {    
        titulo : "Cien Años de Soledad",
        autor : "Gabriel García Márquez",
        paginas : 417,
        añoPublicacion : 1967
}

const mostrarValores = () => {
    for(let prop in libro ) {
        console.log(`${prop} tiene el valor ${libro[prop]}`);
    }
}

mostrarValores();