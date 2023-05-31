/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
`use strict`

var numero1 = parseInt(prompt(`Ingrese su primer numero:\n`))
var numero2 = parseInt(prompt(`Ingrese su segundo numero:\n`))
var numero3 = parseInt(prompt(`Ingrese su tercer numero:\n`))
var numero4 = parseInt(prompt(`Ingrese su cuarto numero:\n`))
var numero5 = parseInt(prompt(`Ingrese su ultimo numero:\n`))

function promedio (numero1, numero2, numero3, numero4, numero5){
    console.log("El promedio de los valores informados es: " + (numero1 + numero2 + numero3 + numero4 + numero5)/5);
}

promedio(numero1, numero2, numero3, numero4, numero5)