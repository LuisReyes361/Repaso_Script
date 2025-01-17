function get(arr,idex) {
    if (idex < 0) {
        return 'El elemento no existe';
    }

    if (arr.length <= idex) {
        return 'elemento no existe';
    }
}


let resultado = get([1,2],1);
console.log(resultado);