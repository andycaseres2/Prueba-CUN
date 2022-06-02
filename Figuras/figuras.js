const cuadradolado1 = document.getElementById("cuadradolado1");
const cuadradolado2 = document.getElementById("cuadradolado2");
const triangualoaltura = document.getElementById("trianguloaltura");
const triangulobase = document.getElementById("triangulobase");
const circuloradio = document.getElementById("circuloradio");
const btn = document.getElementById("btn");

document.getElementById("selecciona").style.display = "none";
document.getElementById("cuadradolado1").style.display = "none";
document.getElementById("cuadradolado2").style.display = "none";
document.getElementById("circuloradio").style.display = "none";
document.getElementById("trianguloaltura").style.display = "none";
document.getElementById("triangulobase").style.display = "none";

function showInp() {
  getSelectValue = document.getElementById("select").value;
  if (getSelectValue == "circulo") {
    document.getElementById("circuloradio").style.display = "inline-block";
    document.getElementById("trianguloaltura").style.display = "none";
    document.getElementById("triangulobase").style.display = "none";
    document.getElementById("cuadradolado1").style.display = "none";
    document.getElementById("cuadradolado2").style.display = "none";
    /////////////////////////////////
  } else if (getSelectValue == "selecciona") {
    document.getElementById("selecciona").style.display = "none";
    document.getElementById("cuadradolado1").style.display = "none";
    document.getElementById("cuadradolado2").style.display = "none";
    document.getElementById("circuloradio").style.display = "none";
    document.getElementById("trianguloaltura").style.display = "none";
    document.getElementById("triangulobase").style.display = "none";
    ///////////////////////////////////////
  } else if (getSelectValue == "cuadrado") {
    document.getElementById("cuadradolado1").style.display = "inline-block";
    document.getElementById("cuadradolado2").style.display = "inline-block";
    document.getElementById("circuloradio").style.display = "none";
    document.getElementById("trianguloaltura").style.display = "none";
    document.getElementById("triangulobase").style.display = "none";

    ///////////////////////////////
  } else if (getSelectValue == "triangulo") {
    document.getElementById("circuloradio").style.display = "none";
    document.getElementById("cuadradolado1").style.display = "none";
    document.getElementById("cuadradolado2").style.display = "none";
    document.getElementById("triangulobase").style.display = "inline-block";
    document.getElementById("trianguloaltura").style.display = "inline-block";
  }
}

function circulo(radio) {
  radio = circuloradio.value;
  return Math.round(Math.PI * radio * radio);
}

function cuadrado(lado1, lado2) {
  lado1 = cuadradolado1.value;
  lado2 = cuadradolado2.value;
  return lado1 * lado2;
}

function triangulo(altura, base) {
  altura = trianguloaltura.value;
  base = triangulobase.value;
  return (altura * base) / 2;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (getSelectValue == "circulo") {
    document.getElementById("result").innerHTML = circulo();
  } else if (getSelectValue == "cuadrado") {
    document.getElementById("result").innerHTML = cuadrado();
  } else if (getSelectValue == "triangulo") {
    document.getElementById("result").innerHTML = triangulo();
  }
});
