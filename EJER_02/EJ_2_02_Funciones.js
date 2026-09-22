function calcularAreaRectangulo (base = 10, altura = 5){

    return base * altura

}

const calcularAreaTriangulo = function(base = 10, altura = 5){

    return (base * altura) /2

}

const calcularAreaTrianguloArrow = (base = 10, altura= 5) => {

    return (base * altura) /2

}



console.log("Area del triangulo: ", calcularAreaRectangulo(8, 4))

console.log("Área del triángulo:", calcularAreaTriangulo(8, 4))

console.log("Área del triángulo con Arrow Function:", calcularAreaTrianguloArrow(8, 4))

// Probar los valores por defecto
console.log("Rectángulo usando valores por defecto:",calcularAreaRectangulo())

console.log("Triángulo usando valores por defecto:", calcularAreaTriangulo())