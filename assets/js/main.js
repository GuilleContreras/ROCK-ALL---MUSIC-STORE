

//Declaración de Variables

let guitarras = 0;
let bajos = 0;
let baterias = 0;
let presupuesto = 0;
let fenderStratocaster = 3000;
let gibsonlesPaul = 4500;
let fenderTelecaster = 3500;
let bajoFendejazzbass = 3850;
let bajoGibsonlespaul = 4350;
let bajoFendepresicionbass = 5600;
let dbDrums = 8500;
let gretsch = 7900;
let mapex = 6900;
let continuar = 0;
let nombre = "";

//Declaración de función saludo

function saludo() {
    alert("Somos Rock All!");
    let nombre = prompt ("Para comenzar decinos tu nombre");
  
    while (nombre === "") {
      nombre = prompt("Para comenzar decinos tu nombre");
    }
    alert("Bienvenido a Rock All " + nombre + ", tu tienda de instrumentos musicales");
  }
  saludo();



//Selección de articulo y compra

while (continuar !== 2){

let seleccion = prompt ("Hola " + nombre + " ¿Qué estás buscando?, 1- Guitarras, 2- Bajos, 3- Baterias");

if (seleccion == 1) {
    alert("Bienvenido a nuestra sección de Guitarras!");
    let presupuesto = parseFloat(prompt("¿Cual es tu presupuesto para esta compra?"));
    let guitarras = prompt("¿Qué guitarra deseas comprar?, 1- Fender Stratocaster, 2- Gibson Les Paul, 3- Fender Telecaster");
    if (guitarras == 1){
        if (presupuesto >= fenderStratocaster){
            alert("Felicitaciones!, has comprado una guitarra Fender Stratocaster.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (guitarras == 2){
        if (presupuesto >= gibsonlesPaul){
            alert("Felicitaciones!, has comprado una guitarra Gibson Les Paul.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (guitarras == 3){
        if (presupuesto >= fenderTelecaster){
            alert("Felicitaciones!, has comprado una guitarra Fender Telecaster.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
    }

} else if (seleccion == 2){
    alert("Bienvenido a nuestra sección de Bajos");
    let presupuesto = parseFloat(prompt("¿Cual es tu presupuesto para esta compra?"));
    let bajos = prompt("¿Qué bajo deseas comprar?, 1- Fender Jazz Bass, 2- Gibson Les Paul, 3- Fender Presicion Bass  ");
    if (bajos == 1){
        if (presupuesto >= bajoFendejazzbass){
            alert("Felicitaciones!, has comprado un bajo Fender Jazz Bass.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 2){
        if (presupuesto >= bajoGibsonlespaul){
            alert("Felicitaciones!, has comprado un bajo Gibson Les Paul.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 3){
        if (presupuesto >= bajoFendepresicionbass){
            alert("Felicitaciones!, has comprado un bajo Fender Precision Bass.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
    }

} else if (seleccion == 3){
    alert("Bienvenido a nuestra sección de Baterias");
    let presupuesto = parseFloat(prompt("¿Cual es tu presupuesto para esta compra?"));
    let baterias = prompt("¿Qué bateria deseas comprar?, 1- Db Drums, 2- Gretsch, 3- Mapex");
    if (baterias == 1){
        if (presupuesto >= dbDrums){
            alert("Felicitaciones!, has comprado una Batería Db Drums.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 2){
        if (presupuesto >= gretsch){
            alert("Felicitaciones!, has comprado una Batería Gretsch.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 3){
        if (presupuesto >= mapex){
            alert("Felicitaciones!, has comprado una Batería Mapex.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
    }

} else {
    alert("Tu selección no es válida, por favor volvé a elegir nuevamente");
}

let continuar = prompt("¿Deseas seguir comprando?, 1- SI, 2- NO.")

    if (continuar == 2){
        break;
    }

}


alert("Gracias por tu visita, vuelve a recargar la pagina para comenzar nuevamente.")


