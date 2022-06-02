function escaleranumber(numero) {
  if (Number(numero) === numero) {
    if (numero > 0 && numero <= 100) {
      let rep, i;

      for (i = 0; i <= numero; i++) {
        for (rep = 1; rep <= i; rep++) {
          console.log((rep += i));
        }
      }
    }
  }
}

escaleranumber(3);
