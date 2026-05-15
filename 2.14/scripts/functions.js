function calcularCheque(){

    let dias = parseFloat(document.getElementById("dias").value);

    let hotel = parseFloat(document.getElementById("hotel").value);

    let comida = parseFloat(document.getElementById("comida").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(dias) || isNaN(hotel) || isNaN(comida)){

        resultado.style.display = "block";

        resultado.innerHTML =
        "Complete todos los campos";

        return;
    }

    let totalHotel = hotel * dias;

    let totalComida = comida * dias;

    let totalCheque =
    totalHotel + totalComida;

    resultado.style.display = "block";

    resultado.innerHTML =
    "Hotel: $" + totalHotel.toFixed(2) +
    "<br><br>Comida: $" + totalComida.toFixed(2) +
    "<br><br>Total del cheque: $" + totalCheque.toFixed(2);

}