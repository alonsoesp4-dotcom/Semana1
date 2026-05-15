function convertirDolares(){

    let pesos = parseFloat(document.getElementById("pesos").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(pesos)){

        resultado.style.display = "block";

        return;
    }

    let dolares = pesos / 17.2;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Dólares obtenidos: $" + dolares.toFixed(2);

}