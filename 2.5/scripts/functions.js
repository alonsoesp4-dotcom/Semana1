function calcularPintura(){

    let metros = parseFloat(document.getElementById("metros").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(metros) || isNaN(costo)){

        resultado.style.display = "block";

        return;
    }

    let total = metros * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Presupuesto total: $" + total.toFixed(2);

}