function calcularPromedio(){

    let examen1 = parseFloat(document.getElementById("examen1").value);

    let examen2 = parseFloat(document.getElementById("examen2").value);

    let examen3 = parseFloat(document.getElementById("examen3").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(examen1) || isNaN(examen2) || isNaN(examen3)){

        resultado.style.display = "block";

        return;
    }

    let promedio =
    (examen1 * 0.25) +
    (examen2 * 0.25) +
    (examen3 * 0.50);

    resultado.style.display = "block";

    resultado.innerHTML =
    "Promedio final: " + promedio.toFixed(2);

}