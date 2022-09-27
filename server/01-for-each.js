const letters = ["a", "b", "c"];

//metodo antiguo y extenso 😫
for(let i = 0; i < letters.length; i++){
    const element = letters[i];
    console.log(element);
};

//metodo nuevo
letters.forEach(item => console.log(item))