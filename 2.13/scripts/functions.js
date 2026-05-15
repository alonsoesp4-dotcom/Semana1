function calcularAhorro(){

    let sueldo = parseFloat(document.getElementById("sueldo").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(sueldo)){

        resultado.style.display = "block";

        resultado.innerHTML =
        "Ingrese un sueldo válido";

        return;
    }

    let ahorroSemanal = sueldo * 0.15;

    let ahorroMensual = ahorroSemanal * 4;

    let ahorroAnual = ahorroMensual * 12;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Ahorro anual: $" + ahorroAnual.toFixed(2);

}