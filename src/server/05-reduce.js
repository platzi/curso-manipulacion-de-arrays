//reduce sirve para reducir todo a un solo valor.

const totals = [1, 2, 3, 4];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
    
}

//reduce recibe 2 parametros (1: arrow function 2: estado inicial)
const withReduce = totals.reduce((sum, element) => sum + element, 0)

