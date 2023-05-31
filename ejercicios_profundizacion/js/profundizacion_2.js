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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
let cupo = parseInt(prompt(`Cuantos invitados tendrás? 1, 2 o 3:\n`))

function generarInvitados() {
    
    let names = [];
  
  for (let i = 0; i < cupo; i++) {
    let name = prompt("Ingrese el nomrbe de su invitado");
    names.push(name);
  }
  
  return names;
}


  var invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)