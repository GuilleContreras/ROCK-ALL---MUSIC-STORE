function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carritoDeCompras")) || [];
  }
 
  function guardarProductosCarrito(productosTodos) {
    localStorage.setItem("carritoDeCompras", JSON.stringify(productosTodos));
 }
 
 function removerProducto (id) {
  let productos_carrito = obtenerProductosCarrito();
  let producto = buscarProducto(id);
  let posicion = productos_carrito.findIndex(x => x.id == id);
  productos_carrito[posicion].cantidad -=1;
  
  
Swal
.fire({
    title: "¿Estás seguro que deseas eliminar el producto?",
    //text: "¿Eliminar?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: '#1F76B2'
})
.then(resultado => {
    if (resultado.value) {
      if (productos_carrito[posicion].cantidad == 0){
        productos_carrito.splice(posicion, 1)
      }
      guardarProductosCarrito(productos_carrito);
      actualizarProductosCarrito();
      renderProductosCarrito();
    } else {
        // Dijeron que no
        console.log("*NO se elimina la venta*");
    }
});
  
  
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

