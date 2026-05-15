function calcularTiempo(){

    let distancia = parseFloat(document.getElementById("distancia").value);

    let velocidad = parseFloat(document.getElementById("velocidad").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(distancia) || isNaN(velocidad)){

        resultado.style.display = "block";

        return;
    }

    let tiempo = distancia / velocidad;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Tiempo estimado: " + tiempo.toFixed(2) + " horas";

}