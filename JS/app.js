let nombreEntrenador = prompt("¡Bienvenido, entrenador Pokémon! ¿Cuál es tu nombre?");
alert("¡Hola, " + nombreEntrenador + "! Prepárate para comenzar tu aventura Pokémon.");

class Producto{
    constructor(id, nombre, precio, description){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.description = description;
    }
}
//productos del listado
const productos = [
    new Producto (1, 'Bulbasaur', 200, 'Pokemon tipo hierva'),
    new Producto (2, 'Ivysaur', 250, 'Pokemon tipo hierva'),
    new Producto (3, 'Venusaur', 300, 'Pokemon tipo hierva'),
    new Producto (4, 'Charmander', 200, 'Pokemon tipo fuego'),
    new Producto (5, 'Charmeleon', 250, 'Pokemon tipo fuego'),
    new Producto (6, 'Charizard', 300, 'Pokemon tipo fuego'),
    new Producto (7, 'Squirtle', 200, 'Pokemon tipo agua'),
    new Producto (8, 'Wartortle', 250, 'Pokemon tipo agua'),
    new Producto (9, 'Blastoise', 300, 'Pokemon tipo agua'),
    new Producto (10, 'Caterpie', 200, 'Pokemon tipo bicho'),
    new Producto (11, 'Metapod', 250, 'Pokemon tipo bicho'),
    new Producto (12, 'Butterfree', 300, 'Pokemon tipo bicho'),
    new Producto (13, 'Weedle', 200, 'Pokemon tipo bicho'),
    new Producto (14, 'Kakuna', 250, 'Pokemon tipo bicho'),
    new Producto (15, 'Beedrill', 300, 'Pokemon tipo bicho'),
    new Producto (16, 'Pidgey', 200, 'Pokemon tipo normal'),
    new Producto (17, 'Pidgeotto', 250, 'Pokemon tipo normal'),
    new Producto (18, 'Pidgeot', 300, 'Pokemon tipo normal'),
    new Producto (19, 'Rattata', 200, 'Pokemon tipo normal'),
    new Producto (20, 'Raticate', 300, 'Pokemon tipo normal'),
    new Producto (21, 'Spearow', 200, 'Pokemon tipo normal'),
    new Producto (22, 'Fearow', 300, 'Pokemon tipo normal'),
    new Producto (23, 'Ekans', 200, 'Pokemon tipo veneno'),
    new Producto (24, 'Arbok', 300, 'Pokemon tipo veneno'),
    new Producto (25, 'Pikachu', 400, 'Pokemon tipo electrico'),
];
const pokemonFuego = productos.filter(producto => producto.description.includes('fuego'));
console.log(pokemonFuego);
const productosPrecio = productos.filter(producto => producto.precio >= 200 && producto.precio <= 250);
console.log(productosPrecio);
//tomamos el div tipo container del html
const productContainer = document.querySelector('#product-container');
//div de la card, para dar forma
productos.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('producto');
    //innerHtml 
    productDiv.innerHTML = `
        <div class='card'>
            <h3>${producto.id}</h3>
            <h1>${producto.nombre}</h1>
            <p>${producto.precio}</p>
            <p>${producto.description}</p>
            <button> "Agregar-a-tu-Pokebola" </button>
            </div>
            `;
    productContainer.appendChild(productDiv);


})
