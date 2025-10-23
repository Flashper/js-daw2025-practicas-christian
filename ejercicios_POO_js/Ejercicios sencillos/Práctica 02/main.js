Array.prototype.mediaAritmetica = function () {
    if(this.length === 0){
        throw new Error('El Array no puede estar vacío');
    }
    return this.reduce((acu , valor) => acu+valor) / this.length;
}

probarArray();

probarArray(1, 2, 3, 4, 5);

function probarArray(...args) {
    try {
        console.log(`Array media aritmética: ${args.mediaAritmetica()}`);
    }catch(error) {
        console.error(error.message);
    }
}


