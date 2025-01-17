/**
 * personaje de tev
 */
/*
*/
let nombre = "taranjillo";
let anume = "dragon ball";
let edad = 20;

let personaje = {
    nombre: "taranjillo",
    anume: "dragon ball",
    edad: 20,

};

let objetor = {

}

console.log(objetor);

console.log (personaje);
console.log (personaje.nombre);
console.log (personaje['edad']);

personaje.edad = 13;
personaje ['nombre'] = "Luis MArio Reyes Angeles";
console.log(personaje.nombre);
console.log(personaje['edad']);


delete personaje.anume;
console.log(personaje);

let personas = [`luis`,'mario'];
console.log(personas)

console.log (typeof personas);