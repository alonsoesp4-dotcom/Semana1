function calcularPrecio(){

    let precio = parseFloat(document.getElementById("precio").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(precio)){

        resultado.style.display = "block";

        resultado.innerHTML =
        "⚠️ Ingrese un precio válido";

        return;
    }

    let descuento = precio * 0.20;

    let precioDescuento = precio - descuento;

    let iva = precioDescuento * 0.15;

    let precioFinal = precioDescuento + iva;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Precio con descuento: $" + precioDescuento.toFixed(2) +
    "<br><br> Precio final con IVA: $" + precioFinal.toFixed(2);

}