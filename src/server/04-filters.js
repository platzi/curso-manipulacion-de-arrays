const words = ["spray", "elites", "limit", "apple", "exuberant"];

//filtrar sin el metodo filter
const newArray = [];

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  if (element.length > 6) {
    newArray.push(element);
  }
}

//filtrar con metodo filter

const withFilter = words.filter((item) => item.length >= 6);

//filtrando ordenes con filter

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

const withOrder = orders.filter((item) => item.delivered && item.total >= 100);

console.log('soy with order',withOrder);

//hagamos un buscador con filter

const searchFilter = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(searchFilter("Santiago"));

//ejercicio

/** Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ] */


function filterByLength(array) {
  // Tu código aquí 👈
 
  return array.filter(item => item.length >= 4)
}

console.log(filterByLength(['rosa', 'gol', 'pez', 'día', 'gafas']))

