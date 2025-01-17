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
    [1,{ id : 1, name : "Nicolas"}],
    [2,{ id : 2, name : "Luis"}],
    [3,{ id : 3, name : "Mario"}],
];

function topairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = topairs(array);
console.log(resultado);