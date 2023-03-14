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
    return articulo.costo >= 3000
})
// Método filter: devuelve un nuevo array con lo especificado 
//console.log(articulosFiltrados) //regresa nuevos objetos

const nombreDeArticulos = articulos.map((articulo)=>{
    return articulo.nombre
})
//Método map: devuelve un nuevo array con lo especificado
//console.log(nombreDeArticulos) // regresa strings 