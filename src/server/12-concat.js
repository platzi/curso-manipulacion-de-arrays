const elements = [1, 1, 2, 2];
const othersElements = [1, 1, 2, 2, 5, 4];

// fucionar los elementos de un array sin concat

const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}


//con concat

const withConcat = elements.concat(othersElements) 