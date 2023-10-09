class Instrumento{
    constructor(tipoInstrumento, marca, modelo, precio, codigoId){
        this.tipoInstrumento = tipoInstrumento;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.codigoId = codigoId;
    }

    cargarTipoInstrumento(tipoInstrumentoCargado){
        this.tipoInstrumento = tipoInstrumentoCargado;
        alert(tipoInstrumentoCargado + ' cargado a la base de datos');
    }

    cargarMarca(marcaCargada){
        this.marca = marcaCargada;
        alert(marcaCargada + ' cargado a la base de datos');
    }

    cargarModelo(modeloCargado){
        this.modelo = modeloCargado;
        alert(modeloCargado + ' cargado a la base de datos');
    }

    cargarPrecio(precioCargado){
        this.precio = precioCargado;
        alert(precioCargado + ' cargado a la base de datos');
    }

    cargarCodigoId(codigoIdCargado){
        this.codigoId = codigoIdCargado;
        alert(codigoIdCargado + ' cargado a la base de datos');
    }

}

const instrumento1 = new Instrumento('Guitarra electrica', 'Gibson', 'LP-100', 850000, 'AA0001');
const instrumento2 = new Instrumento('Bajo electrico', 'Ibanez', 'GSR206B', 460000, 'AB0001');
const instrumento3 = new Instrumento('Teclado', 'Yamaha', 'PSR-E273', 150000, 'AC0001');
const instrumento4 = new Instrumento('', '', '', 0, '');
const instrumento5 = new Instrumento('', '', '', 0, '');
const instrumento6 = new Instrumento('', '', '', 0, '');


/* instrumento4.cargarTipoInstrumento(prompt('Ingrese el tipo de instrumento'));
instrumento4.cargarMarca(prompt('Ingrese la marca del instrumento'));
instrumento4.cargarModelo(prompt('Ingrese el modelo del instrumento'));
instrumento4.cargarPrecio(parseFloat(prompt('Ingrese el precio del instrumento')));
instrumento4.cargarCodigoId(prompt('Ingrese el codigo del instrumento'));

console.log(instrumento4);

instrumento5.cargarTipoInstrumento(prompt('Ingrese el tipo de instrumento'));
instrumento5.cargarMarca(prompt('Ingrese la marca del instrumento'));
instrumento5.cargarModelo(prompt('Ingrese el modelo del instrumento'));
instrumento5.cargarPrecio(parseFloat(prompt('Ingrese el precio del instrumento')));
instrumento5.cargarCodigoId(prompt('Ingrese el codigo del instrumento'));

console.log(instrumento5);

instrumento6.cargarTipoInstrumento(prompt('Ingrese el tipo de instrumento'));
instrumento6.cargarMarca(prompt('Ingrese la marca del instrumento'));
instrumento6.cargarModelo(prompt('Ingrese el modelo del instrumento'));
instrumento6.cargarPrecio(parseFloat(prompt('Ingrese el precio del instrumento')));
instrumento6.cargarCodigoId(prompt('Ingrese el codigo del instrumento'));

console.log(instrumento6); */

let precioNeto = 0; 
let precioConIva = 0;

function comprar(){
    let instrumentoAComprar = prompt('Ingresa que instrumento queres comprar (selecciona mediante el numero correspondiente)\n1-' + instrumento1.tipoInstrumento + ', ' + instrumento1.marca + ', ' + instrumento1.modelo + ', $' + instrumento1.precio + '\n2-' + instrumento2.tipoInstrumento + ', ' + instrumento2.marca + ', ' + instrumento2.modelo + ', $' + instrumento2.precio + '\n3-' + instrumento3.tipoInstrumento + ', ' + instrumento3.marca + ', ' + instrumento3.modelo + ', $' + instrumento3.precio + '\n4-' + instrumento4.tipoInstrumento + ', ' + instrumento4.marca + ', ' + instrumento4.modelo + ', $' + instrumento4.precio + '\n5-' + instrumento5.tipoInstrumento + ', ' + instrumento5.marca + ', ' + instrumento5.modelo + ', $' + instrumento5.precio + '\n6-' + instrumento6.tipoInstrumento + ', ' + instrumento6.marca + ', ' + instrumento6.modelo + ', $' + instrumento6.precio);
    
        switch(instrumentoAComprar){
            case '1':
                alert('Vas a comprar' + instrumento1.tipoInstrumento + ', ' + instrumento1.marca + ', ' + instrumento1.modelo + '\n Al precio de $' + instrumento1.precio );
                precioNeto = instrumento1.precio;
                return precioNeto;
            case '2':
                alert('Vas a comprar' + instrumento2.tipoInstrumento + ', ' + instrumento2.marca + ', ' + instrumento2.modelo + '\n Al precio de $' + instrumento2.precio );
                precioNeto = instrumento2.precio;
                return precioNeto;
            case '3':
                alert('Vas a comprar' + instrumento3.tipoInstrumento + ', ' + instrumento3.marca + ', ' + instrumento3.modelo + '\n Al precio de $' + instrumento3.precio );
                precioNeto = instrumento3.precio;
                return precioNeto;
            case '4':
                alert('Vas a comprar' + instrumento4.tipoInstrumento + ', ' + instrumento4.marca + ', ' + instrumento4.modelo + '\n Al precio de $' + instrumento4.precio );
                precioNeto = instrumento4.precio;
                return precioNeto;
            case '5':
                alert('Vas a comprar' + instrumento5.tipoInstrumento + ', ' + instrumento5.marca + ', ' + instrumento5.modelo + '\n Al precio de $' + instrumento5.precio );
                precioNeto = instrumento5.precio;
                return precioNeto;
            case '6':
                alert('Vas a comprar' + instrumento6.tipoInstrumento + ', ' + instrumento6.marca + ', ' + instrumento6.modelo + '\n Al precio de $' + instrumento6.precio );
                precioNeto = instrumento5.precio;
                return precioNeto;
            default:
                alert('opcion inexistente');
                precioNeto = instrumento6.precio;
                return precioNeto;
        }

}

function aplicarIva(precioNeto){
    precioConIva = precioNeto * 1.21;
    return precioConIva;
}

function devolverIvaDebito(precioNeto){
    alert('Te devolvemos el iva por pagar con debito');
    alert('Usted pagara un monto de $' + precioNeto);
    alert('Gracias por su compra');
}

function descuentoEfectivo(precioConIva){
    alert('Tenemos un gran descuento de 30% por pagarnos con billetes');
    let precioConDescuentoEfectivo = precioConIva - (precioConIva * 0.3);
    alert('Usted pagara un monto de $' + precioConDescuentoEfectivo);
    alert('Gracias por su compra');
}

function aplicarRecargoCredito(precioConIva){
    let cuotas = prompt('Cuantas cuotas quiere pagar?(escriba el numero de cuotas (1, 3, 6, 12) )\n 1 Cuota -Sin recargo \n 3 Cuotas - 30% de recargo \n 6 cuotas - 60% de recargo \n 12 cuotas - 120% de recargo');
    switch (cuotas){
        case '1':
            alert('Usted pagara un monto de ' + precioConIva);
            alert('Gracias por su compra');
            break;
        case '3':
            precioFinal = precioConIva * 1.3;
            alert('Usted pagara un monto de ' + precioFinal);
            alert('Gracias por su compra');
            break;
        case '6':
            precioFinal = precioConIva * 1.6;
            alert('Usted pagara un monto de ' + precioFinal);
            alert('Gracias por su compra');
            break;
        case '12':
            precioFinal = precioConIva * 2.2;
            alert('Usted pagara un monto de ' + precioFinal);
            alert('Gracias por su compra');
            break;
        default:
            alert('opcion no valida');
    }
}


let comprarInstrumento = prompt('Deseas comprar un instrumento? ("si" para ir a comprar)');

if (comprarInstrumento == 'si'){
    comprar();
    aplicarIva(precioNeto);
    tipoDePago = prompt('Como desea pagar? (Ingrese el numero que indica la opcion) \n 1-Con efectivo (30% de descuento) \n 2-Con debito (descontamos el iva) \n 3-Con credito (1, 3, 6, y hasta 12 cuotas)');
    switch(tipoDePago){
        case '1':
            descuentoEfectivo(precioConIva);
            break;
        case '2':
            devolverIvaDebito(precioNeto);
            break;
        case '3':
            aplicarRecargoCredito(precioConIva);
            break;
        default:
            alert('opcion no valida');
    }

}else{
    alert('no vas a comprar nada');
}