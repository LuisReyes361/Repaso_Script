let longitud = 7 

function crearArray(n){
    if (n<=0){
        return[]
    }
    let arr = [];
    for (let i =0; i< n ; i++){
        arr[i]= 1 + i;
    }
    return arr;
}

let resultado = crearArray(longitud);

console.log(resultado)