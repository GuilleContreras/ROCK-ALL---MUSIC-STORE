

//Declaración de Variables

let guitarras = 0;
let bajos = 0;
let baterias = 0;


//Declaración de función Nombre

function nombreCliente() {
    let nombre;
    nombre = document.getElementById("tagNombre").value;
    console.log(nombre);
    return nombre;
}

let nombre = nombreCliente();

//Declaración de función Presupuesto

function presupuestoCliente() {
    let presupuesto;
    presupuesto = document.getElementById("tagPresupuesto").value;
    console.log(presupuesto);
    return presupuesto;

}

let presupuesto = document.getElementById("tagPresupuesto").value;

function datosIniciales() {
    nombreCliente();
    presupuestoCliente();
}
//Declaración de función continuar

let total_pagar = 0;

function continuar2 (){
    let continuar = prompt("¿Deseas seguir comprando?, 1- SI, 2- NO.")

    if (continuar == 1){
        seleccion = prompt ("¿Qué estás buscando?, " + "1- " + categorias[0] + ", 2- " + categorias[1] + ", 3- " + categorias[2]);
        if (seleccion == 1){
            guitarShop();
        }
        if (seleccion == 2){
            bassShop();
        }
        if (seleccion == 3){
            drumShop();
        }
    }else {
        alert("Gracias por tu visita, vuelve a recargar la pagina para comenzar nuevamente.")
    }

}

function continuar (){
    let presupuesto = document.getElementById("tagPresupuesto").value;
    let continuar = prompt("¿Deseas seguir comprando?, 1- SI, 2- NO.")

    if (continuar == 1){
        seleccion = prompt ("¿Qué estás buscando?, " + "1- " + categorias[0] + ", 2- " + categorias[1] + ", 3- " + categorias[2]);
        if (seleccion == 1){
            guitarShop();
        }
        if (seleccion == 2){
            bassShop();
        }
        if (seleccion == 3){
            drumShop();
        }
    }
    if (continuar == 2){
        
        for (var productos of carritoDeCompras) {

            alert("Tienes agregado al carrito: " + productos.name);
            total_pagar += productos.price;
        }
        alert("El total a pagar es $ " + total_pagar)
        let compraFinal = prompt("¿Deseas confirmar la compra?\n1- SI\n2-NO")
        if (compraFinal == 1){
            presupuesto -= total_pagar;
            alert("Gracias por tu compra!, Te quedan $ " + presupuesto + " de tu presupuesto inicial.")
        }else {
            alert("Gracias por tu visita, vuelve a recargar la pagina para comenzar nuevamente.")
        }

    }
}

 

//Selección de articulo y compra


 

let boton1 = document.getElementById("btnGuitars")
boton1.addEventListener("click", guitarShop)

function guitarShop (){
    let nombre = document.getElementById("tagNombre").value;
    let presupuesto = document.getElementById("tagPresupuesto").value;

    alert("Bienvenido a nuestra sección de Guitarras!");
    
    
    let guitarras = prompt(nombre + ", ¿Qué guitarra deseas comprar?,\n1- Fender Stratocaster\n2- Gibson Les Paul\n3- Fender Telecaster");
    if (guitarras == 1){
        if (presupuesto >= fenderStratocaster.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderStratocaster.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(fenderStratocaster); 
            alert("Felicitaciones!, has agregado una " + fenderStratocaster.category + " " + fenderStratocaster.name + " al carrito de compras.");
            console.log(carritoDeCompras);
            continuar();
            
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (guitarras == 2){
        if (presupuesto >= gibsonlesPaul.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + gibsonlesPaul.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(gibsonlesPaul); 
            alert("Felicitaciones!, has agregado una " + gibsonlesPaul.category + " " + gibsonlesPaul.name + " al carrito de compras.");
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (guitarras == 3){
        if (presupuesto >= fenderTelecaster.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderTelecaster.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(fenderTelecaster); 
            alert("Felicitaciones!, has agregado una " + fenderTelecaster.category + " " + fenderTelecaster.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
        continuar2();
    }


}

let boton2 = document.getElementById("btnBass")
boton2.addEventListener("click", bassShop)

function bassShop (){
    let nombre = document.getElementById("tagNombre").value;
    let presupuesto = document.getElementById("tagPresupuesto").value;
   

    alert("Bienvenido a nuestra sección de Bajos");
    let bajos = prompt(nombre + ", ¿Qué bajo deseas comprar?, 1- Fender Jazz Bass, 2- Gibson Les Paul, 3- Fender Presicion Bass  ");
    if (bajos == 1){
        if (presupuesto >= fenderJazz_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar un " + fenderJazz_bass.name +  " de" + " $" + fenderJazz_bass.price + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(fenderJazz_bass); 
            alert("Felicitaciones!, has agregado un " + fenderJazz_bass.category + " " + fenderJazz_bass.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 2){
        if (presupuesto >= gibsonLespaul_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar un " + gibsonLespaul_bass.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(gibsonLespaul_bass); 
            alert("Felicitaciones!, has agregado un " + gibsonLespaul_bass.category + " " + gibsonLespaul_bass.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 3){
        if (presupuesto >= fenderPresicion_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar un " + fenderPresicion_bass.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(fenderPresicion_bass); 
            alert("Felicitaciones!, has agregado un " + fenderPresicion_bass.category + " " + fenderPresicion_bass.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
        continuar2();
    }

} 

let boton3 = document.getElementById("btnDrum")
boton3.addEventListener("click", drumShop)

function drumShop (){
    let nombre = document.getElementById("tagNombre").value;
    let presupuesto = document.getElementById("tagPresupuesto").value;
    
    alert("Bienvenido a nuestra sección de Baterias");
    let baterias = prompt(nombre + ", ¿Qué batería deseas comprar?, 1- Db Drums, 2- Gretsch, 3- Mapex");
    if (baterias == 1){
        if (presupuesto >= dbDrums_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + dbDrums_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(dbDrums_bateria); 
            alert("Felicitaciones!, has agregado una " + dbDrums_bateria.category + " " + dbDrums_bateria.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 2){
        if (presupuesto >= gretsch_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + gretsch_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(gretsch_bateria); 
            alert("Felicitaciones!, has agregado una " + gretsch_bateria.category + " " + gretsch_bateria.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 3){
        if (presupuesto >= mapex_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + mapex_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            carritoDeCompras.push(mapex_bateria);
            alert("Felicitaciones!, has agregado una " + mapex_bateria.category + " " + mapex_bateria.name);
            console.log(carritoDeCompras);
            continuar();
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
        continuar2();
    }

}
