function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido = `<table class="table>"`;

    for (let producto of productos){
        contenido +=`<tr class="p-3">
        <td><img src="assets/img/${producto.imagen}" alt="${producto.nombre}" width="48"></td>
        <td class="align-middle">${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td>${producto.nombre}</td>
        <td class="text-end"><a href="#" class="btn btn-light"><img src="assets/img/trash.png"></a></td>
        </tr>`

    }
    
    contenido += `</table>`
    document.getElementById("productos_carrito").innerHTML=contenido;

 }
 renderProductosCarrito();