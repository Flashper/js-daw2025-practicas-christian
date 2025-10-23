let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "ingeniero",

    presentarse: presentar

}

function presentar() {
    return `Hola, soy ${this.nombre}, tengo ${this.edad} y soy ${this.profesion}`;
}

console.log(persona.presentarse());