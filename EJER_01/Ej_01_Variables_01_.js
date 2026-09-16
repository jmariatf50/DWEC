//Declaro la variable Nombre tipo string y es constante no se puede modificar
const nombre = "Jose Maria"

//Declaro la variable edad como es let se puede modificar luego. Es de tipo int
let edad = 21

//Declaro la variable tieneMascota tipo boolean y no es modificables ya que es un const.
const tieneMascota = true

//Modifico la edad
edad = 22

//tieneMascota = false -- lo comento debido a que dara error

//Saco por consola lo que tiene almacenado cada parametro
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(tieneMascota, typeof tieneMascota)

//Creo esta variable para almacenar la frase
let frase

//Este if else se utiliza para comprobar si tienen mascota y sacar un mensaje diferente
if (tieneMascota == true){

    frase =  nombre + " tiene " + edad + " años y sí tiene mascota." 

}

else{

    frase =  nombre + " tiene " + edad + " años y no tiene mascota." 

}

//Saco la frase por pantalla
console.log(frase)


