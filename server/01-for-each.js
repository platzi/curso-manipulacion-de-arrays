const letters = ['a', 'b', 'c'];

//con for:
const timeForInit = performance.now()
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element)
}

//complejidad temporal for
const timeForFinish = performance.now()
const totalTimeFor = timeForFinish - timeForInit
console.log("time for:", totalTimeFor);

//con forEach
const lettersForEach = ['a', 'b', 'c'];
const timeForEachInit = performance.now();
lettersForEach.forEach(letter => console.log('forEach', letter))

//complejidad temporal forEach
const timeForEachFinish = performance.now();
const totalTimeForEach = timeForEachFinish - timeForEachInit;
console.log('time forEach:', totalTimeForEach);