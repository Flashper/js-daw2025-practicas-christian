const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 16 }
];
/*Versión en la que se ve paso a paso*/
const personasMas18 = personas.filter(persona => persona.edad>18);

console.log(personasMas18)

const EdadesPorDos = personasMas18.map(personasMas18=>personasMas18.edad*2);

console.log(EdadesPorDos);

const SumaEdades = EdadesPorDos.reduce((total,elemento) => total + elemento,0);

console.log(SumaEdades);

/*Versión con resultado final*/
const resultado = personas
    .filter(persona => persona.edad > 18)
    .map(persona => persona.edad * 2)
    .reduce((total, elemento) => total + elemento, 0);

console.log(resultado);
