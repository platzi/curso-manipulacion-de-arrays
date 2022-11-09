//Ahora que ya sabes cómo funciona el método map de arrays estudiemos diferentes situaciones que deberás manejar array de objetos como los siguientes datos de orders.

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
//Extrayendo datos necesarios
//De un conjunto de datos a veces necesitas ciertos atributos para realizar una operación, extraer los nombres o cuantificar un suceso. El método map te permite extraer estos datos según los puedas utilizar.

const totales = orders.map(order => order.total)

console.log(totales) // [ 60, 120, 180, 240 ]
/* Transformando objetos dentro de un array
De un conjunto de datos, de los cuales son objetos, a veces requieres añadir una propiedad nueva o eliminar una que no es necesaria. Si necesitas transformar objetos dentro de un array, debes tener en cuenta que cada objeto tiene una referencia en memoria propia. Por lo que si transformas un objeto, también lo harás en el original como en el nuevo, aun cuando el método map es inmutable.

Los parámetros por referencia los debes tener presente cuando manejes objetos y arrays.

 Ejemplo donde transformas los objetos originales
*/

const tarifas = orders.map(order => {
    order.tax = 0.19
    return order
})

tarifas[0] === orders[0] // true
tarifas[1] === orders[1] // true
Una forma de evitar este comportamiento, es crear un nuevo objeto con el spread operator (operador de propagación).

// Ejemplo donde no transformas los objetos originales
const tarifas = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

tarifas[0] === orders[0] // false
tarifas[1] === orders[1] // false