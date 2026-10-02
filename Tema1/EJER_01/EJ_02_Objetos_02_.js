//Creacion del objeto coche
const coche = {

    marca: "Seat",
    modelo: "Toledo",
    año: 2010,
    estaDisponible: false

}

//Sale por pantalla el objeto coche
console.table(coche)

//Desestructuracion 
const { marca, modelo } = coche

console.log("Marca: ", marca)
console.log("Modelo: ", modelo)

//Cambiar un parametro del objeto

coche.estaDisponible = true

console.table(coche)

//Agregar nueva propiedad al objeto

coche.color = "rojo"

console.table(coche)

//eliminar una propiedad de coche

delete coche.año

console.table(coche)


