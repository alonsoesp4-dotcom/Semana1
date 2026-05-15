function calcularHotel(){

    let dias = parseFloat(document.getElementById("dias").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(dias) || isNaN(costo)){

        resultado.style.display = "block";

        return;
    }

    let total = dias * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Total a pagar: $" + total.toFixed(2);

}