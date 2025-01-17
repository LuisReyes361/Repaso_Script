let array = [{
    id: 1, 
    nombre: 'Nicolas',
    },
{
    id: 2, 
    nombre: 'Felipe',
    
},
{
    id: 3, 
    nombre: 'Chanchito Feliz',
    
}];

let pares =[
    [1,{  name : "Nicolas"}],
    [2,{  name : "Luis"}],
    [3,{  name : "Mario"}],
];

function topairs(arr){
    let collecion = [];
    for (idx in arr){
        let elemnto = arr [idx];
        collecion[idx] = elemnto[1];
        collecion[idx].id = elemento[0]
    }
    return collecion;
}

let resultado = topairs(array);
console.log(resultado);