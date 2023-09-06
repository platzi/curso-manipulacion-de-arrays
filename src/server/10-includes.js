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


  //encuentra el nombre en el array.
  let includesInArray = false;
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if(element.name === 'Pizza' ){
        includesInArray = true;
        break
    }
  }

  console.log(includesInArray, 'for')

  const withIncludes = products.includes('Pizza')

  console.log(withIncludes)

  //includes no busca en objetos

  //buscador que retorna palabras segun el parametro de busqueda

  function filterByTerm(array, term) {
    // Tu código aquí 👈
  
    let result = array.filter(arr => {
      return arr.includes(term)
    })
    return result
  }

  //toma un array lo filtra y por cada termino trae el array filtrado.
  