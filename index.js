//

let producto = parseInt(prompt('Ingrese numero del producto que desea: \n 1. Varita USD 20\n 2. Bufanda USD 10\n 3. Uniforme USD 70\n 4. Chocolate USD 7'));

while (producto < 1 || producto > 4 || isNaN(producto)) {
    alert('Numero incorrecto');
    producto = parseInt(prompt('Ingrese numero del producto que desea'));
};
switch (producto >= 1 && producto <= 4) {
    case producto === 1:
        subtotal = 20 * 1.21;
        alert('Tu el precio de tu varita es: ' + subtotal);
        break;

    case producto === 2:
        subtotal = 10 * 1.21;
        alert('Tu el precio de tu bufanda es: ' + subtotal);

        break;

    case producto === 3:
        subtotal = 70 * 1.21;
        alert('Tu el precio de tu uniforme es: ' + subtotal);

        break;

    default:
        subtotal = 7 * 1.21;
        alert('Tu el precio de tu chocolate es: ' + subtotal);
        break;

};



/* let continuar= prompt('Desea seguir comprando escriba: si o no');

while (continuar==='si'||continuar==='Si'||continuar==='SI') {
    producto = parseInt(prompt('Ingrese numero del producto que desea: \n 1. Varita USD 20\n 2. Bufanda USD 10\n 3. Uniforme USD 70\n 4. Chocolate USD 7'));
    ver= carrito(subtotal);
    

}
alert('Gracias por su compra')

 */