function calcularPotencia(){

    let r = parseFloat(document.getElementById("resistencia").value);

    let i = parseFloat(document.getElementById("corriente").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(r) || isNaN(i)){

        resultado.style.display = "block";

        return;
    }

    let v = r * i;

    let p = v * i;

    resultado.style.display = "block";

    resultado.innerHTML =
    " Voltaje: " + v.toFixed(2) +
    "<br><br> Potencia: " + p.toFixed(2);

}