import { ingresarNumero } from './main.js'

function validarTarjeta(numero) {
  if (!/^\d{13,16}$/.test(numero)) {
    return false;
  }

  if (/^3[47]\d{13}$/.test(numero)) {
    return "American Express";
  } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(numero)) {
    return "Diners Club";
  } else if (/^6011\d{12}$/.test(numero)) {
    return "Discover";
  } else if (/^5[1-5]\d{14}$/.test(numero)) {
    return "Mastercard";
  } else if (/^4\d{15}$/.test(numero)) {
    return "Visa";
  } else {
    return false;
  }
}

function main() {
  let numero = ingresarNumero();
  let tipo = validarTarjeta(numero);
  if (tipo) {
    console.log("El tipo de tarjeta es:", tipo);
  } else {
    alert("Error: El número de tarjeta ingresado es inválido.");
  }
}
main();
