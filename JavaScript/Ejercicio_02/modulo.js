import {ingresarNumeros} from './main.js'

function sumarNumeros(numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

function esPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function contarPrimos(numeros) {
  return numeros.filter(num => esPrimo(num)).length;
}

function contarPares(numeros) {
  return numeros.filter(num => num % 2 === 0).length;
}

function calcularPromedio(numeros) {
  if (numeros.length === 0) return 0;
  return sumarNumeros(numeros) / numeros.length;
}

function promedioNumerosPrimos(numeros) {
  const primos = numeros.filter(num => esPrimo(num));
  return calcularPromedio(primos);
}

function promedioNumerosPares(numeros) {
  const pares = numeros.filter(num => num % 2 === 0);
  return calcularPromedio(pares);
}


function menuOperaciones() {
  console.log("\nOperaciones disponibles:");
  console.log("a. Sumar los números");
  console.log("b. Contar los números primos");
  console.log("c. Contar los números pares");
  console.log("d. Calcular el promedio de los números primos");
  console.log("e. Calcular el promedio de los números pares");
}

function main() {
  const numeros = ingresarNumeros();
  if (numeros.length === 0) {
    console.log("No se han ingresado números.");
    return;
  }

  menuOperaciones();
  let opcion = prompt("Seleccione una operación (a, b, c, d o e):").toLowerCase();

  switch (opcion) {
    case 'a':
      console.log("La suma de los números es:", sumarNumeros(numeros));
      break;
    case 'b':
      console.log("La cantidad de números primos es:", contarPrimos(numeros));
      break;
    case 'c':
      console.log("La cantidad de números pares es:", contarPares(numeros));
      break;
    case 'd':
      console.log("El promedio de los números primos es:", promedioNumerosPrimos(numeros));
      break;
    case 'e':
      console.log("El promedio de los números pares es:", promedioNumerosPares(numeros));
      break;
    default:
      console.log("Opción inválida.");
      break;
  }
}
main();