const user = {id: 1 };

user.name = "nicolas";
user.guardar = function(){
    console.log('guardando',user.name);
}
user.guardar();
console.log(user)
delete user.name;
console.log(user)

const user2 = Object.freeze({id:1});
user2.name = "nico";
user2.id = 2