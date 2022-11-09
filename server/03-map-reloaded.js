/* El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

Este proceso recibe dos argumentos:

La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
*/

let otherArray = array.filter(function(), thisArg)
//La función, que recibe como argumento el método filter, utiliza tres parámetros:

/* El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
*/

const other = array.map(function(element, index, array))
/* Diferencia entre la estructura for y el método filter
Los métodos de arrays nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura for, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que filtre los elementos que tengan más de 6 letras en un array de palabras.

Si empleamos la estructura for, necesitaremos un array adicional vacío y usarlo con el método push para agregar los elementos que cumplan la condición. El método push es mutable.

*/
const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log(newWords) // [ 'elites', 'exuberant' ]
//Con el método filter, solo debemos establecer la función que indique la condición a cumplir para cada elemento.

const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words.filter( function(word){
    if (word.length >=6){
      return true
    }else{
      return false
    }
})
// o 
const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]
/*Recuerda siempre retornar un valor en la función callback del método.

Filtrar elementos a partir de la propiedad de un objeto
Con el método filter puedes filtrar los objetos de un array a partir de una condición referente a la propiedad de cada elemento.

Teniendo en cuenta que el nuevo array contendrá el objeto completo que haya cumplido con la condición especificada.
*/

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
//Por ejemplo, filtremos los elementos del array orders cuyo total sea mayor a 150.

const newOrders = orders.filter(order => order.total > 150)

console.log(newOrders) 
/* [
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
]
*/
