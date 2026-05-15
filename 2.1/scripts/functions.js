function calcularArea(){

    let base = parseFloat(document.getElementById("base").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(base) || isNaN(altura)){

        resultado.style.display = "block";

        return;
    }

    let area = (base * altura) / 2;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Área del triángulo: " + area.toFixed(2);

}