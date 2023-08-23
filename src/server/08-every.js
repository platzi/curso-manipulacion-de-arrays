const numbers = [1, 30, 41, 29, 10, 13]

const withEvery = numbers.every(item => item <= 40)

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const todosMenores = team.every(item => item.age <= 18)
  const buscador = team.every(item => item.name === "Santiago")

  console.log(`todos son menores ? ${todosMenores}`)
  console.log(`existe el siguiente nombre zulema ? ${buscador}`)