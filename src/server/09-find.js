const numbers = [1, 30, 41, 29, 50, 60]

let results = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element === 30) {
        results = element;
        break;
    }
}
console.log('for', results)

const withFind = numbers.find(item => item === 30)


console.log('con find', withFind)

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  //busca el producto
  const buscarComida = products.find(item => item.id === '🥞')

  console.log(buscarComida, 'existe mi hamburgesa?')

  //busca el indice del producto

  const posicionComida = products.findIndex(item => item.id === '🥞')