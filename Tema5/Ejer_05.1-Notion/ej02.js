//Esta funcion se encargara de dividir dos numeros
function dividir(a, b){

    //Lo primero comprobamos que no se intente dividir entre 0

    if (b === 0){

        //Lanzaremos un error controlado de tipo RangeError
        throw new RangerError ('No se puee dividir entre cero');

    }


    //Si las comprobaciones son correctas, devolveremos el resultado de la division
    return a/b;

}

// El siguiente array contendra las operaciones que vamos a utilizar
const resultado = dividir(a,b);

try{

    //Hacemos llamamientio a la funcion de dividir:
    const resultado = dividir(a,b);

    //Mostramos tanto la operacion como el resultado:
    console.log(`${a} / ${b} = ${resultado}`);

} catch(error){
    //Si ocurre cualquier error, mostraremos su nombre y su mensaje
    console.log(`${error.name}: ${error.mensage}`);

}finally{

    //Utilizamos el finally para indicar que termino con un mensaje fijo que se ejecutara siempre
    console.log('Operacion Terminada')
    
}
