
function eleccionProductos(subtotal) {
    switch (producto >= 1 && producto <= 4) {
        case producto === 1:
            subtotal = 20 * 1.21;
            alert('Tu el precio de tu varita es: ' + subtotal);
            return subtotal;
            
        case producto === 2:
            subtotal = 10 * 1.21;
            alert('Tu el precio de tu bufanda es: ' + subtotal);
            return subtotal;
    
        case producto === 3:
                subtotal = 70 * 1.21;
            alert('Tu el precio de tu uniforme es: ' + subtotal); 
            return subtotal;
            
        case producto === 4:
            subtotal = 7 * 1.21;
            alert('Tu el precio de tu chocolate es: ' + subtotal);
            return subtotal;
            
        default:
            alert('Opcion no existente');
            return subtotal;
            
    };
};

function valorCorrecto() {
    while (producto < 1 || producto > 4) {
    alert('Ingreso un valor no correcto');
    producto = parseInt(prompt('Ingrese numero del producto que desea: \n 1. Varita USD 20\n 2. Bufanda USD 10\n 3. Uniforme USD 70\n 4. Chocolate USD 7'));
};
};
let producto = 0;
let continuar= prompt('Desea continuar comprando?').toLocaleLowerCase().trim();
let subtotal= 0;
let total=0; 

while (continuar==='si') {
    producto = parseInt(prompt('Ingrese numero del producto que desea: \n 1. Varita USD 20\n 2. Bufanda USD 10\n 3. Uniforme USD 70\n 4. Chocolate USD 7'));
    valorCorrecto();
    subtotal= eleccionProductos(subtotal);
    total+=subtotal; 
    console.log('El precio del '+producto+' es: '+ subtotal);
    continuar= prompt('Desea continuar comprando?').toLocaleLowerCase().trim();
    if (continuar==='si') {
        continue
    }else{
        alert('Gracias por su compra, el total es: '+ total);
    };    
};
alert('Gracias por su visita');
console.log('El total de la compra es: ' + total);
