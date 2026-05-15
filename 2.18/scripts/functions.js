function calcularTiempo(){

    let edad = parseFloat(document.getElementById("edad").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(edad)){

        resultado.style.display = "block";

        return;
    }

    let meses = edad * 12;

    let semanas = edad * 52;

    let dias = edad * 365;

    let horas = dias * 24;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Meses: " + meses +
    "<br><br> Semanas: " + semanas +
    "<br><br>Días: " + dias +
    "<br><br> Horas: " + horas;

}