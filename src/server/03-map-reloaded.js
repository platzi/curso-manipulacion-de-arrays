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
];

const totales = orders.map((item) => item.total);

//de esta manera seguimos teniendo el mismo array original.
const addImpuestos2 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log(addImpuestos2);
console.log(orders);

//ejercicio calcula y agrega una nueva propiedad a un array
/** Tienes un array de objetos que representan datos de productos con los siguientes atributos:

name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, o para un producto con precio de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución. */

function addNewAttr(array) {
  // Tu código aquí 👈
  return array.map((item) => ({
    ...item,
    taxes: Math.trunc(item.price * 0.19),
  }));
}
