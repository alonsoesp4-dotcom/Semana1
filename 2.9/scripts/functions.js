function calcularLlamada(){

    let minutos = parseFloat(document.getElementById("minutos").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(minutos) || isNaN(costo)){

        resultado.style.display = "block";

        return;
    }

    let total = minutos * costo;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Costo total: $" + total.toFixed(2);

}