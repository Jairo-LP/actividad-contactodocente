import{ useState } from "react";

//1
function calcularAreaCuadrado(lado: number): number 
{ return lado * lado; } 
const lado = 5; const area = 
calcularAreaCuadrado(lado); 
console.log("Ejercicio 1 - Área:", area);

//2
function sumarArreglo(arreglo: number[]): number {
let suma = 0;
for (let numero of arreglo) 
{ suma = suma + numero; } 
return suma; }

const numeros = [10, 20, 30, 40, 50]; 
const suma = sumarArreglo(numeros);
console.log("Ejercicio 2 - Suma:", suma);

//3

const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]; 
const nuevoArreglo = arreglo.map(numero => numero / 5);
 console.log("Ejercicio 3 - Nuevo arreglo:", nuevoArreglo);

//4

const alumnos =[{
  nombre: "viviana", edad: 19, calificacion: 10
},
{
  nombre: "luis", edad: 17, calificacion: 9
},
{
  nombre: "maria", edad: 18, calificacion: 7
}
];

function calcularPromedio(): number{
  let sumaCalificaciones = 0;

  for (let alumno of alumnos) {
    sumaCalificaciones += alumno.calificacion;
  }
  return sumaCalificaciones / alumnos.length;
}
const promedio = calcularPromedio();