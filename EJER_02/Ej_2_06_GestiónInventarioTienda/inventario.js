export function crearProducto(nombre, categoria, precio, stock) {
    
    return {

        nombre,
        categoria,
        precio,
        stock

    }

}

export function filtrarPorCategoria(inventario, categoria) {

    return inventario.filter(producto => producto.categoria === categoria)

}

export function listarProductosAgotados(inventario) {

    return inventario.filter(producto => producto.stock === 0)

}

export function calcularValorTotalInventario(inventario) {

    return inventario.reduce((total, producto) => total + producto.precio * producto.stock, 0)

}

export default function resumenInventario(inventario) {

    const numeroProductos = inventario.length

    const categorias = new Set(inventario.map(producto => producto.categoria))

    const numeroCategorias = categorias.size

    const valorTotal = calcularValorTotalInventario(inventario)

    console.log("=== RESUMEN DEL INVENTARIO ===")

    console.log(`Número total de productos: ${numeroProductos}`)

    console.log(`Número de categorías distintas: ${numeroCategorias}`)

    console.log(`Valor total del inventario: ${valorTotal.toFixed(2)} €`)
    
}
