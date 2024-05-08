const encontrarPalabraMasLarga=(...palabras) =>{
  let palabraMasLarga = "";
  palabras.forEach(palabra => {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  });
  return palabraMasLarga;
}

const mainEncontrarPalabraMasLarga=() =>{
  const palabras = [];
  let palabra;
  console.log("Ingrese las palabras (ingrese 'fin' para terminar):");
  while (true) {
    palabra = prompt("Ingrese una palabra:");
    if (palabra === "fin") break;
    palabras.push(palabra);
  }
  const palabraMasLarga = encontrarPalabraMasLarga(...palabras);
  console.log("La palabra más larga es:", palabraMasLarga);
}

mainEncontrarPalabraMasLarga();