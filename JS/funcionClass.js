class TotalCompra {
    constructor(carritoHP) {
        this.carritoHP = carritoHP
    }
    importeSubtotal() {
        if (carritoHP.length > 0) {
            return this.carritoHP.reduce((acc, producto)=> acc + producto.precio , 0).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }
 
    confirmarCompra() {
        if (this.importeSubtotal() !== 'Error inesperado') {
            return `✅ Confirmamos el pago de U$D ${this.importeSubtotal()}. \n Muchas gracias por su compra!`
        } else {
            return `⛔️ Error en la transacción.`
        }
    }
}