function calcularEdad(){

    let nacimiento = parseFloat(document.getElementById("nacimiento").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(nacimiento)){

        resultado.style.display = "block";

        return;
    }

    let edad = 2026 - nacimiento;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Edad: " + edad + " años";

}