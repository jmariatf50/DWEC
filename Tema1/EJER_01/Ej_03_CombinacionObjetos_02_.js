//Creacion del objeto producto
const producto = {

    nombre: "Ordenador",
    precio: 899

}

//Creacion del objeto cliente
const cliente = {

    nombreCliente: "Miguel",
    esPremium: false

}

//Creacion del objeto pedido combinando los anteriores objetos
const pedido ={

    ...producto,
    ...cliente

}

// 4. Mostrar pedido
console.log("Pedido:")
console.table(pedido)

// 5. ¿Qué pasa si tienen una propiedad con el mismo nombre?

const cliente2 ={

    nombre: "Novia de Miguel"

}

const pedido2 = {

    ...producto,
    ...cliente2

}

console.log("Pedido 2:");
console.table(pedido2);


/* 
Al crear este objeto convinado no sale error 
ya que esta almacenando un nuevo cliente con 
otros datos asociandolo a unos datos que son 
fijos 
*/