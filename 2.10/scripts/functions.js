function calcularPago(){

    let metros = parseFloat(document.getElementById("metros").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let pago = metros * costo;

    document.getElementById("resultado").innerHTML =
    "El total a pagar es: $" + pago;

}