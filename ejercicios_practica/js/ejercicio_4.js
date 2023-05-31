"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones


// function generarInvitados() {
//     let lista = [];

// lista.push(prompt("Ingrese el primer invitado:"));
// lista.push(prompt("Ingrese el segundo invitado:"));
// lista.push(prompt("Ingrese el tercer invitado:"));

// console.log("Lista de invitados:", lista);
// }
function generarInvitados() {
    var names = [];
    
    for (var i = 0; i < 3; i++) {
      var name = prompt("Ingrese el nombre de su invitado:");
      names.push(name);
    }
    
    return names;
  }
/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
var invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)