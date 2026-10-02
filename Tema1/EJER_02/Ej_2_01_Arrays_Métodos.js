//Creo un array con 6 numeros

const numeros = [2, 5, 8, 11, 14, 17]

//Array multiplicando por dos el anterior

const dobles = numeros.map(numero => numero*2)

console.log("Array original: ", numeros)
console.log("Dobles: ", dobles) 

//Filtro los numeros para que solo salgan lo spares
const pares = numeros.filter(numero => numero % 2 === 0)

console.log("Numeros pares: ", pares)

//Bucle que imprime cada numero del array
for (const numero of pares) {

    console.log(numero)

}