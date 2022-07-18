//Declaración de array de productos

const productosTodos = [
    {id:1, nombre:"Fender Stratocaster 70s", precio:545000, descripcion: "Guitarra Fender 70s Stratocaster", categoria: "Guitarras", stock: 10, imagen:"fender_stratocaster70s.png"},
    {id:2, nombre:"Fender Telecaster 72", precio:538000,descripcion: "Guitarra Fender Telecaster 72 Thinline", categoria: "Guitarras", stock: 10, imagen:"fender_telecaster72.png"},
    {id:3, nombre:"Taylor BT1", precio:123000,descripcion: "Guitarra Electroacustica BT1 E", categoria: "Guitarras", stock: 10, imagen:"taylor_bt1.png"},
    {id:4, nombre:"Fender Jazz Bass", precio:91000,descripcion: "Bajo Fender Jazz Bazz American Professional", categoria: "Bajos", stock: 10, imagen:"bajo_fender_jazzbass.png"},
    {id:5, nombre:"Fender Active Jazz Bass", precio:91000,descripcion: "Bajo Fender Activo Deluxe Jazz Bass", categoria: "Bajos", stock: 10, imagen:"bajo_fender_activo.png"},
    {id:6, nombre:"Bajo Yamaha BB235", precio:198365,descripcion: "Bajo Yamaha BB235 Broadbass Yellow", categoria: "Bajos", stock: 10, imagen:"bajo_yamaha_235.png"},
    {id:7, nombre:"Pearl Decade Maple", precio:291730,descripcion: "Bateria Pearl Decade Maple Satin Brown Burst", categoria: "Baterías", stock: 10, imagen:"bateria_pearl.png"},
    {id:8, nombre:"Gretsch Catalina Maple", precio:463745,descripcion: "Batería De 5 Cuerpos Gretsch Catalina Maple", categoria: "Baterías", stock: 10, imagen:"bateria_gretsch.png"},
    {id:9, nombre:"Vintage Sonor VT16", precio:545000,descripcion: "Bateria Vintage Sonor VT16 THREE20", categoria: "Baterías", stock: 10, imagen:"bateria_sonor.png"}
];

console.log(productosTodos)
 //Funciones

 function obtenerProductosLs() {
    return JSON.parse(localStorage.getItem("productosTodos")) || [];
 }

 function guardarProductosLs(productosTodos) {
    localStorage.setItem("productosTodos", JSON.stringify(productosTodos)) || [];
 }

 function buscarProducto(id) {
   let productos = obtenerProductosLs();
   return productos.find(x => x.id == id);
      
}

 function renderProductos() {
    let productos = obtenerProductosLs();
    let contenido = "";

    for (let producto of productos){
        contenido +=`<div class="col-md-4 p-2">
        <div class="card p-2">
        <img src="assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body bg-light">
          <h5 class="card-title text-center">${producto.nombre}</h5>
          <p class="card-text text-center">$${producto.precio}</p>
          <p class="card-text text-center"><a href="#" class="btn btn-dark" onclick="agregarCarrito(${producto.id})" title="Agregar al Carrito">Agregar</a></p>
         </div>
         </div>
         </div>`
    }
    document.getElementById("productos").innerHTML=contenido;

 }

 
function agregarCarrito (id) {
   let producto = buscarProducto(id);
   let productos_carrito = obtenerProductosCarrito();
   producto.cantidad = 1;
   productos_carrito.push(producto);
   guardarProductosCarrito(productos_carrito);
   actualizarProductosCarrito();
}

guardarProductosLs(productosTodos);
actualizarProductosCarrito();
renderProductos();