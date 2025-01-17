let array = [2, 5, 7, 15, -5, -100, 55];

function menormayor(arr){
    let mayor = arr [0];
    let menor = arr [0] ;

    for (numero of arr){
        menor = menor < numero ? menor : numero;
        mayor= mayor > numero ? mayor : numero;
    }
    return[menor,mayor];

}

let numeros = menormayor(array)
console.log(numeros);