//Declaración de objeto constructor de producto

class producto {
    constructor (nombre, precio, categoria, stock){
    this.name = nombre;
    this.price = parseFloat(precio);
    this.category = categoria;
    this.stock = stock;
    this.vendido = false;
    }

    venderProducto() {
        this.vendido = true;
    }

    fueVendido() {
        return this.vendido;
    }
}

//Declaración de Instancias de la clase producto

const fenderStratocaster = new producto("Fender Stratocaster", 3000, "guitarra", 10);
const gibsonlesPaul = new producto("Gibson Les Paul", 4500, "guitarra", 10);
const fenderTelecaster = new producto("Fender Telecaster", 3500, "guitarra", 10);
const fenderJazz_bass = new producto("Fender Jazz Bass", 3850, "bajo", 10);
const gibsonLespaul_bass = new producto("Gibson Les Paul Bass", 4350, "bajo", 10);
const fenderPresicion_bass = new producto("Fender Presicion Bass", 5600, "bajo", 10);
const dbDrums_bateria = new producto("Batería dbDrums", 8500, "batería", 10);
const gretsch_bateria = new producto("Batería Gretsch", 7900, "batería", 10);
const mapex_bateria = new producto("Batería Mapex", 6900, "batería", 10);

 //Declaración de Arrays

 // Array de todos los productos
 const productosTodos = [];

 productosTodos.push(fenderStratocaster);
 productosTodos.push(gibsonlesPaul); 
 productosTodos.push(fenderTelecaster); 
 productosTodos.push(fenderJazz_bass);
 productosTodos.push(gibsonLespaul_bass);
 productosTodos.push(fenderPresicion_bass);
 productosTodos.push(dbDrums_bateria);
 productosTodos.push(gretsch_bateria);
 productosTodos.push(mapex_bateria);

 // Arrays por categorias
 const categorias = ["Guitarras", "Bajos", "Baterías"];
 const guitar = [];
 guitar.push(fenderStratocaster);
 guitar.push(gibsonlesPaul); 
 guitar.push(fenderTelecaster); 
 const bass = [];
 bass.push(fenderJazz_bass);
 bass.push(gibsonLespaul_bass);
 bass.push(fenderPresicion_bass);
 const drum = [];
 drum.push(dbDrums_bateria);
 drum.push(gretsch_bateria);
 drum.push(mapex_bateria);
 
// Compruebo el contenido de los Array "guitar"", "bass" y "drum"

for (const content of guitar){
   console.log(content.name);
}
for (const content of bass){
   console.log(content.name);
}
for (const content of drum){
   console.log(content.name);
}

// Defino el array "Carrito"

var carritoDeCompras = []; 