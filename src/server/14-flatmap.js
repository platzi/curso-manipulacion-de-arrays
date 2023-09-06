const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]
//modifica array sin modificar el original
  products.map(item => {
    if (item.id === update.id) {
      return {
        ...item,
        ...changes,
      }
    }
    return {...item};
  })