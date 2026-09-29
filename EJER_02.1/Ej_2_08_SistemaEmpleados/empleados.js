const empleados = [
    {
        id: 1,
        nombre: "Ana García",
        departamento: "Desarrollo",
        salario: 32000
    },
    {
        id: 2,
        nombre: "Carlos López",
        departamento: "Marketing",
        salario: 28000
    },
    {
        id: 3,
        nombre: "Laura Martín",
        departamento: "Desarrollo",
        salario: 35000
    },
    {
        id: 4,
        nombre: "David Sánchez",
        departamento: "Recursos Humanos",
        salario: 30000
    },
    {
        id: 5,
        nombre: "Marta Fernández",
        departamento: "Ventas",
        salario: 27000
    }
];

function agregarEmpleado(empleado) {
    empleados.push(empleado);
}

function eliminarEmpleado(id) {
    const indice = empleados.findIndex(empleado => empleado.id === id);

    if (indice !== -1) {
        empleados.splice(indice, 1);
    }
}

function buscarPorDepartamento(departamento) {
    return empleados.filter(empleado => {
        return empleado.departamento === departamento;
    });
}

function calcularSalarioPromedio() {
    if (empleados.length === 0) {
        return 0;
    }

    const totalSalarios = empleados.reduce((total, empleado) => {
        return total + empleado.salario;
    }, 0);

    return totalSalarios / empleados.length;
}

function obtenerEmpleadosOrdenadosPorSalario() {
    return [...empleados].sort((a, b) => {
        return b.salario - a.salario;
    });
}

export {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
};
