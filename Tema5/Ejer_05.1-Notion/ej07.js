// Mostramos el primer mensaje directamente.
console.log('1. Salgo de casa');

// Programamos un mensaje que aparecerá después de 500 ms.
setTimeout(() => {
    console.log('2. Llego al supermercado (500 ms)');
}, 500);

// Este mensaje se ejecuta inmediatamente.
console.log('3. Cojo el carro');

// Programamos un mensaje que aparecerá después de 0 ms.
setTimeout(() => {
    console.log('4. Pago en caja (0 ms)');
}, 0);

// Programamos el último mensaje para dentro de 1000 ms.
setTimeout(() => {
    console.log('5. Vuelvo a casa (1000 ms)');
}, 1000);

// Este mensaje también se ejecuta inmediatamente.
console.log('6. Hago la lista');

// Los mensajes 1, 3 y 6 salen primero porque son síncronos.
// Los setTimeout se ejecutan después de terminar el código síncrono.
// Aunque tenga 0 ms, el mensaje 4 no aparece antes del 6.