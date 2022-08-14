//Fetch de JSON "instrumentos.json"

const productosTodos = [];

fetch(`assets/js/instrumentos.json`)
   .then(response => response.json())
   .then(data => {

      data.forEach(elemento => {
         productosTodos.push(elemento);

      })
      guardarProductosLs(productosTodos);
   })


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
   let catGuittarras = document.getElementById("btnCategoria1");
   catGuittarras.addEventListener("click", function () {
      let productos = obtenerProductosLs().filter(producto => producto.categoria == "Guitarras");
      let contenido = "";

      for (let producto of productos) {
         contenido += `<div class="col-md-4 p-2">
        <div class="card p-2">
        <img src="assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body bg-light">
          <h5 class="card-title text-center">${producto.nombre}</h5>
          <p class="card-text text-center">$${producto.precio}</p>
          <p class="card-text text-center"><a class="btn btn-dark" id="btnShop${producto.id}" onclick="agregarCarrito(${producto.id})" title="Agregar al Carrito">Agregar</a></p>
         </div>
         </div>
         </div>`
      }

      document.getElementById("productos").innerHTML = contenido;
      document.getElementById("btnShop1").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop2").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop3").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop10").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop11").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop12").addEventListener("click", agregadoCarritoMsj);
   })

   let catBajos = document.getElementById("btnCategoria2");
   catBajos.addEventListener("click", function () {
      let productos = obtenerProductosLs().filter(producto => producto.categoria == "Bajos");
      let contenido = "";

      for (let producto of productos) {
         contenido += `<div class="col-md-4 p-2">
        <div class="card p-2">
        <img src="assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body bg-light">
          <h5 class="card-title text-center">${producto.nombre}</h5>
          <p class="card-text text-center">$${producto.precio}</p>
          <p class="card-text text-center"><a class="btn btn-dark" id="btnShop${producto.id}" onclick="agregarCarrito(${producto.id})" title="Agregar al Carrito">Agregar</a></p>
         </div>
         </div>
         </div>`
      }

      document.getElementById("productos").innerHTML = contenido;
      document.getElementById("btnShop4").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop5").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop6").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop13").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop14").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop15").addEventListener("click", agregadoCarritoMsj);
   })

   let catBaterias = document.getElementById("btnCategoria3");
   catBaterias.addEventListener("click", function () {
      let productos = obtenerProductosLs().filter(producto => producto.categoria == "Baterías");
      let contenido = "";

      for (let producto of productos) {
         contenido += `<div class="col-md-4 p-2">
        <div class="card p-2">
        <img src="assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body bg-light">
          <h5 class="card-title text-center">${producto.nombre}</h5>
          <p class="card-text text-center">$${producto.precio}</p>
          <p class="card-text text-center"><a class="btn btn-dark" id="btnShop${producto.id}" onclick="agregarCarrito(${producto.id})" title="Agregar al Carrito">Agregar</a></p>
         </div>
         </div>
         </div>`
      }

      document.getElementById("productos").innerHTML = contenido;
      document.getElementById("btnShop7").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop8").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop9").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop16").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop17").addEventListener("click", agregadoCarritoMsj);
      document.getElementById("btnShop18").addEventListener("click", agregadoCarritoMsj);
   })

}


function agregarCarrito(id) {
   let producto = buscarProducto(id);
   let productos_carrito = obtenerProductosCarrito();
   producto.cantidad = 1;
   productos_carrito.push(producto);
   guardarProductosCarrito(productos_carrito);
   actualizarProductosCarrito();
}


actualizarProductosCarrito();

if (document.getElementById("productos") !== null) {

   renderProductos();

}


