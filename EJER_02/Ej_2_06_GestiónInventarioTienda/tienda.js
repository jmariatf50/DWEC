import resumenInventario, {

    crearProducto,
    filtrarPorCategoria,
    listarProductosAgotados,
    calcularValorTotalInventario

} 

from "./inventario.js"

const inventario = []

inventario.push(crearProducto("Auriculares Bluetooth", "Electrónica", 49.99, 10))

inventario.push(crearProducto("Teclado mecánico", "Electrónica", 79.99, 5))

inventario.push(crearProducto("Camiseta básica", "Ropa", 19.99, 20))

inventario.push(crearProducto("Pantalón vaquero", "Ropa", 39.99, 8))

inventario.push(crearProducto("El principito", "Libros", 12.50, 15))

inventario.push(crearProducto("1984", "Libros", 14.99, 0))


// 1. Productos de la categoría "Ropa"
const productosRopa = filtrarPorCategoria(inventario, "Ropa")

console.log("=== PRODUCTOS DE ROPA ===")

console.log(productosRopa)

// 2. Productos agotados
const productosAgotados = listarProductosAgotados(inventario)

console.log("=== PRODUCTOS AGOTADOS ===")

console.log(productosAgotados);

// 3. Valor total del inventario
const valorTotal = calcularValorTotalInventario(inventario)

console.log("=== VALOR TOTAL DEL INVENTARIO ===")

console.log(`${valorTotal.toFixed(2)} €`)

// 4. Resumen completo
resumenInventario(inventario)

