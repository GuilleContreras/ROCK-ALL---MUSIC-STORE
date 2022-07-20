function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
  }
 
  function guardarProductosCarrito(productosTodos) {
    localStorage.setItem("carritoDeCompras", JSON.stringify(productosTodos));
 }
 
 function actualizarProductosCarrito() {
  let productos = obtenerProductosCarrito();
  let contenido = `<button type="button" class="btn btn-primary position-relative">
  <img src="assets/img/shopping-cart.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0</span></button>`
  let total = 0;
  
  if (productos.length > 0){
     for (let producto of productos) {
        total += producto.cantidad
     }
     contenido = `<button type="button" class="btn btn-primary position-relative">
     <img src="assets/img/shopping-cart.png" width="24"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
     ${total}</span></button>`;
  }

  document.getElementById("botonCarrito").innerHTML = contenido;

}

function vaciarCarrito() {
  localStorage.removeItem("carritoDeCompras");
  actualizarProductosCarrito();
  renderProductosCarrito();
}