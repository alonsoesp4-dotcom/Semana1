function calcularCobro(){

    let horas = parseFloat(document.getElementById("horas").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(horas) || isNaN(costo)){

        resultado.style.display = "block";

        return;
    }

    /* redondea las fracciones de hora */
    horas = Math.ceil(horas);

    let total = horas * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Total a pagar: $" + total.toFixed(2);

}