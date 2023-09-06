const elements = ["hola","como", "estas"]

let rtaFinal = '';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for', rtaFinal)
console.log('join', rta)

const title = 'curso de manipulacion de arrays';

console.log(title.split(' ').join('/'))

//funcion que retorna un string separado por un guion, que puede servir para una url

function parseToURL(title) {
    // Tu código aquí 👈
    return title.split(' ').join('-').toLowerCase();
  }