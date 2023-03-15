// Métodos de recorrido de un array
const articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'Tv', costo: 2500},
    {nombre: 'Celular', costo: 10000},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Laptop', costo: 20000},
    {nombre: 'teclado', costo: 500},
    {nombre: 'Audifono', costo:1700},
]

const articulosFiltrados = articulos.filter((articulo)=>{
    return articulo.costo >= 3000;
})
// Método filter: devuelve un nuevo array con lo especificado 
//console.log(articulosFiltrados) //regresa nuevos objetos

const nombreDeArticulos = articulos.map((articulo)=>{
    return articulo.nombre;
})
//Método map: devuelve un nuevo array con lo especificado
//console.log(nombreDeArticulos) // regresa strings 

const ecuentraElPrimerArticulo = articulos.find((articulo)=> {
    return articulo.nombre === 'Libro';
})
//Método find: devuelve el primer elmento que cumpla con la condición
//console.log(ecuentraElPrimerArticulo) //regresa un  objeto

articulos.forEach((articulo)=>{
    console.log(articulo.nombre);
})

const articulosBaratos = articulos. some((articulo)=>{
    return articulo.costo <= 700;
})
//Método some devuelve un booleano (true or false) según lo especificado
console.log(articulosBaratos) 

const arr = [1,2,3]
//console.log(arr[-1])
/* console.log(arr.indexOf(3)) */
arr[-1] = -3;
//console.log(arr[-1])
//console.log(arr.indexOf(-1))
console.log(arr.indexOf(2)) 


function solution(cars) {
    const filtrado = cars.find(function (car) {
        if (car.name === 'Tesla') {
          return true;
        } else {
          return false;
        }
      });
    return filtrado;
    
  }

  console.log(solution([{name: 'Toyota', licensePlate: '7563252'}, {name:'Tesla', annio: 2021}, {name:'Tesla', annio: 2031}]))