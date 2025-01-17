
//{id: 1, recuperarclave: funcion(){}}
function Usuario() {
    this.id = 1;
    this.name = 'luis'
    this.email= 'luis@gmail.com'
    this.recuperarclave = function (){
        console.log('recuperando clave');
    }

}

let usuario = new Usuario();

console.log(usuario)