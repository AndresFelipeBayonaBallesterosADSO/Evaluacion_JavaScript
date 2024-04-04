export function ingresarNumero() {
  while (true) {
    let numero = prompt("Ingrese el número de su tarjeta de crédito:");
    if (/^\d{1,16}$/.test(numero)) {
      return numero;
    } else {
      alert("Error: Por favor ingrese solo números y máximo 16 caracteres.");
    }
  }
}

