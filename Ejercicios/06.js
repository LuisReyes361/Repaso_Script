/*let array =[2, 5, 7, 15, -5, -100, 55];

function cuantoposi(arr) {
    let cantidad = 0;

    for (elementos of arr) {
        if (elementos > 0) {
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = cuantoposi(array);
console.log(resultado);*/

let array =[2, 5, 7, 15, -5, -100, 55];

function cuantoposi(arr) {
    let numinicio = 0;
    for (elementos of arr){
        if (elementos < 0)
            numinicio++;
    }
    return numinicio
}


let resultado = cuantoposi(array);
console.log(resultado);
