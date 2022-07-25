function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
    let sumaTotal = "";
    let tablaSumatoria = "";

    let contenido = `<p class="text-end"><a href="#" id="vaciarCarrito" class="btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito<img src="assets/img/trash.png"></a></p>
    <table class="table">`;

    for (let producto of productos){
        contenido +=`<tr class="p-3">
        <td><img src="assets/img/${producto.imagen}" alt="${producto.nombre}" width="48"></td>
        <td class="align-middle">${producto.nombre}</td>
        <td class="align-middle">$${producto.precio}</td>
        <td class="align-middle">${producto.nombre}</td>
        <td class="text-end"><a href="#" class="btn btn-light"><img src="assets/img/trash.png"></a></td>
        </tr>`
        sumaTotal = productos.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
    }
    
    contenido += `</table>`

    let mensajeTabla = sumaTotal <= 0 ? "Agregá Productos" : ""

    tablaSumatoria = `<table class="table ">
    <thead>
      <tr>
        <th scope="col" class="align-middle"></th>
        <th scope="col">Total sin IVA</th>
        <th scope="col">Total IVA</th>
        <th scope="col">Precio Final (IVA incluído)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"></th>
        <td>$${(sumaTotal*0.79).toFixed(2)}</td>
        <td>$${(sumaTotal*0.21).toFixed(2)}</td>
        <td>$${sumaTotal}</td>
        <td>${mensajeTabla}</td>
      </tr>
      
    </tbody>
    </table>`

    

    document.getElementById("productos_carrito").innerHTML=tablaSumatoria;
    document.getElementById("totales_carrito").innerHTML=contenido;
    document.getElementById("vaciarCarrito").addEventListener("click", carritoBorrado)

 }
 

 
 renderProductosCarrito();