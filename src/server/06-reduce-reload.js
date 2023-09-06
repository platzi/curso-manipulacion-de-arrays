const items = [5, 6, 7, 6, 5, 7, 7, 8];

//encuentra los numeros parecidos y te dice cuantos hay
// si hay 5 y cuanto se repite. ej: 5 : 2
const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});


console.log(rta)

/**Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0 */

function calcSum(numbers) {
    // Tu código aquí 👈
    return numbers.reduce((sum, element) => sum + element , 0)
  }

  console.log(calcSum([2,3,4,3]))