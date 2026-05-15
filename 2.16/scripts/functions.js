function calcularArea(){

    let lado = parseFloat(document.getElementById("lado").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(lado)){

        resultado.style.display = "block";

        return;
    }

    let area = lado * lado;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Área del cuadrado: " + area.toFixed(2);

}