function primeraTarea() {
    return new Promise((resolve)=> {
        resolve(10);
    });
}

function segundaTarea(numero) {
    return new Promise((resolve) => {
        resolve(numero*2);
    });
}

function terceraTarea(numero) {
    return new Promise((resolve) => {
        resolve(numero+5);
    });
}

primeraTarea()
    .then((resultado1) => {
        return segundaTarea(resultado1);
    })
    .then((resultado2) => {
        return terceraTarea(resultado2);
    })
    .then((resultado3) => {
        console.log(resultado3);
        
    });