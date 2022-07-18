const letters = ['a','b','c'];

for (let i=0; i < letters.length; i++ ){
    const element = letters[i];
    console.log('for', element);
}
//Método forEach
letters.forEach(item => console.log('forEach',item))