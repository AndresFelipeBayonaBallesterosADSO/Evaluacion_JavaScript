function mainOrdenarNumeros() {
  let numeros = [];
  let n;
  while ((n = parseInt(prompt("Ingrese un número (o ingrese 0 para terminar):"))) !== 0) {
    if (!isNaN(n)) numeros.push(n);
  }
  const numerosOrdenados = ordenarNumeros(...numeros); 
  mostrarTablaNumeros(numerosOrdenados);
}

function ordenarNumeros(...numeros) {
  return numeros.sort((a, b) => b - a);
}

function mostrarTablaNumeros(numerosOrdenados) {
  console.log("Tabla de números ordenados de mayor a menor:");
  console.log("-------------------------------------------");
  console.log("| Posición |   Número   |");
  console.log("-------------------------------------------");
  numerosOrdenados.forEach((num, index) => {
    console.log(`|    ${index + 1}     |   ${num}   |`);
  });
  console.log("-------------------------------------------");
}
mainOrdenarNumeros();