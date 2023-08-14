const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const totales = orders.map((item) => item.total);

//de esta manera seguimos teniendo el mismo array original.
const addImpuestos2 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log(addImpuestos2);
console.log(orders);
