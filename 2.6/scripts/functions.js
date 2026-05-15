function calcularHipotenusa(){

    let a = parseFloat(document.getElementById("a").value);

    let b = parseFloat(document.getElementById("b").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(a) || isNaN(b)){

        resultado.style.display = "block";

        return;
    }

    let hipotenusa = Math.sqrt((a * a) + (b * b));

    resultado.style.display = "block";

    resultado.innerHTML =
    "Hipotenusa: " + hipotenusa.toFixed(2);

}