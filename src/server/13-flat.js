const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]

// recursividad para aplanar una matriz de varios arrays, dentro de otros arrays.(se toma en entrevistas)

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

// con flat

const rta = matriz.flat()