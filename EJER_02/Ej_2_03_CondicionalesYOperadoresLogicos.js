function retirarDinero(saldo, cantidad, tieneTarjetaCredito) {

    if (saldo >= cantidad) {

        const nuevoSaldo = saldo - cantidad

        console.log(`Retiro exitoso. Saldo restante: ${nuevoSaldo}`)

    } 
    
    else if (tieneTarjetaCredito) {

        console.log("Saldo insuficiente, pagando con tarjeta de crédito")

    } 
    
    else {

        console.log("Saldo insuficiente")

    }

}

// Ejemplos
retirarDinero(1000, 300, false)

retirarDinero(500, 700, true)

retirarDinero(200, 500, false)