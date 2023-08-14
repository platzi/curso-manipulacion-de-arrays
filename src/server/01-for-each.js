const letters = ["a", "b", "c"];

//for tradicional

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(element);
}

//for each
letters.forEach((item) => {
  console.log(item);
});
