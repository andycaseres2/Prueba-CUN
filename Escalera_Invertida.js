function Invertida(numero) {
  for (let i = numero; i > 0; i--) {
    let linea = "";
    for (let j = 1; j < numero - i; j++) {
      linea = linea + " ";
    }
    for (let j = 0; j < i; j++) {
      linea = linea + "*";
    }
    console.log(linea);
  }
}

Invertida(5);
