function calcularBoleto(){

    let km = parseFloat(document.getElementById("km").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(km) || isNaN(costo)){

        resultado.style.display = "block";

        return;
    }

    let total = km * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Costo del boleto: $" + total.toFixed(2);

}