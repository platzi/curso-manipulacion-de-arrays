const letters = ["a", "b", "c", "d"];

const newLetters = letters.map((item) => item.toUpperCase());

console.log(newLetters);

//multiplica todo x 2
function multiplyElements(array) {
  // Tu código aquí 👈
  return array.map((item) => item * 2);
}

// EL METODO MAP ES MUY PODEROSO. Nos ayuda mucho en librerias como REACT donde el renderizado depende de ello.
