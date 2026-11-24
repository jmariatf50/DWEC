console.log('Inicio');

try{

    console.log('Dentro del try 1');

    /*
    Intentamos mostrar una variable que no está declarada.
    Esto provocara un error ReferenceError
    */
   console.log(total);

   //Y esto no se ejecutara ya que previamente ocurrio un error
   console.log('Dentro del try 2')

}catch(error){

    //Capturamos el error y mostramos su nombre
    console.log('Capturado el error: ', error.name);

}finally {

    //Esta parte siempre se ejecutara haya o no error
    console.log('limpieza');

}

//El programa seguira normal despues el try/catch/finally
console.log('Fin');

/*
Si añaimos const total = 0 antes del try,
el error desaparece y se ejecutan las dos líneas del try.
El Finally se ejecutara igualmente.
*/