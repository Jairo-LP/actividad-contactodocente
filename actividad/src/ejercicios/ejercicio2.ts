function sumarArreglo(arreglo: number[]): number {
  let suma = 0;

  for (let numero of arreglo) {
    suma = suma + numero;
  }

  return suma;
}

const numeros = [10, 20, 30, 40, 50];

const resultado = sumarArreglo(numeros);

console.log("La suma es:", resultado);
