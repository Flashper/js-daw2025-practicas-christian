let data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17}
];

data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
);

console.log("Antes de ordenar")
console.log(data);

let data_edad = [...data];
data_edad.sort((a, b) => a.age - b.age);
console.log("Ordenado por edad")
console.log(data_edad);

let data_nombre = [...data];
data_nombre.sort((a, b) => a.name.localeCompare(b.name));
console.log("Ordenado por nombre")
console.log(data_nombre);

let dataMayores30 = data.filter(data=>data.age > 30);

console.log("Mayores de 30 años")
console.log(dataMayores30);