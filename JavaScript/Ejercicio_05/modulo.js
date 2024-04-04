class Calculadora {
  static suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos operadores deben ser números para la suma.');
    }
    return a + b;
  }

  static resta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos operadores deben ser números para la resta.');
    }
    return a - b;
  }

  static multiplicacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos operadores deben ser números para la multiplicación.');
    }
    return a * b;
  }

  static division(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos operadores deben ser números para la división.');
    }
    if (b === 0) {
      throw new Error('No se puede dividir entre cero.');
    }
    return a / b;
  }
}