function calcularPago(){

    let kw = parseFloat(document.getElementById("kw").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(kw) || isNaN(costo)){

        resultado.style.display = "block";

        resultado.innerHTML =
        "⚠️ Complete todos los campos";

        return;
    }

    let pago = kw * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    "⚡ Total a pagar: $" + pago.toFixed(2);

}