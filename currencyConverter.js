const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasadeCambio = 0.85;

function convertirDolaresaEuros(dolares) {
  return dolares * tasadeCambio;
}

console.log("¡BIENVENIDO AL CONVERTIDOR DE $ A € !");
console.log("Esta aplicación convierte dólares a euros empleando una tasa de cambio fija.");

rl.question('Por favor, ingrese la cantidad en dólares: ', (cantidadDolares) => {
  const cantidadenDolares = parseFloat(cantidadDolares);

  if (isNaN(cantidadenDolares)) {
    console.log('Entrada no válida. Debe ingresar un número válido.');
  } else {
    const cantidadenEuros = convertirDolaresaEuros(cantidadenDolares);
    console.log(`${cantidadDolares} dólares es equivalentes a ${cantidadenEuros} euros.`);
  }

  rl.close();
});
