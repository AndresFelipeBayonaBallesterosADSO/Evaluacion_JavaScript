export function ingresarNumeros() {
  const numeros = [];
  let n;
  while ((n = parseInt(prompt("Ingrese un número (o ingrese 0 para terminar):"))) !== 0) {
    if (!isNaN(n)) numeros.push(n);
  }
  return numeros;
}