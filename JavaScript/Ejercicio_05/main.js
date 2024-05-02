import { Calculadora } from './modulo.js';
const prompt = promptSync();

try {
  let num1 = parseFloat(prompt('Ingrese el primer número: '));
  let num2 = parseFloat(prompt('Ingrese el segundo número: '));

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Ambos números deben ser válidos.');
  }

  console.log('Suma:', Calculadora.suma(num1, num2));
  console.log('Resta:', Calculadora.resta(num1, num2));
  console.log('Multiplicación:', Calculadora.multiplicacion(num1, num2));
  console.log('División:', Calculadora.division(num1, num2));
} catch (error) {
  console.error('Error:', error.message);
}