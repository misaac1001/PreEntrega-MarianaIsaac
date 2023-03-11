/*
function calcularImpuestos() {
    let productosConIva = productos.map(producto =>{
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: (producto.importe * IVA).toFixed(2)
        }
})
    console.log(productosConIva);
}; */

//PROCESO

function buscarProducto(id) {
    let resultado = productos.find(producto => producto.id === id)
    return resultado
}

function comprar() {
    let codigoID = parseInt(prompt("Seleccione su producto mediante codigo ID que aparece en la tabla"));
    if ((codigoID < 1) || (codigoID > 8) || isNaN(codigoID)) {
        alert("⛔️ Error en el código ingresado.");
        return comprar()
    } else {
        let eleccion = buscarProducto(codigoID);
        carritoHP.push(eleccion);
        let continuar = confirm('Desea comprar otro producto?')
        if (continuar) {
            comprar()
        } else {
            finalizarCompra()
        }
    }
}

function iniciarProceso() {
    let bienvenida = confirm('Bienvenido! Deseas realizar una compra?');
    if (bienvenida !== true) {
        alert("Gracias por su visita.")

    } else {
        console.table(productos);
        comprar();
    };
};

function finalizarCompra() {
    if (carritoHP.length === 0) {
        console.warn("El carrito está vacío")
        return
    }
    const shop = new TotalCompra(carritoHP)
    alert(`El costo total es de $ ${shop.importeSubtotal()}` )
    let respuesta = confirm("¿Deseas confirmar tu pago?")
    if (respuesta) {
        alert(shop.confirmarCompra());
        carritoHP.length = 0
    }
};
iniciarProceso();






