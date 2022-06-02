function escalera(numero) {
  for (let i = 0; i < numero; i++) {
    let linea = "";
    for (let j = 1; j < numero - i; j++) {
      linea = linea + " ";
    }

    for (let j = 0; j < i + 1; j++) {
      linea = linea + "*";
    }
    console.log(linea);
  }
}

escalera(5);
