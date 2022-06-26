

//Declaración de Variables

let guitarras = 0;
let bajos = 0;
let baterias = 0;
let presupuesto = 0;
let continuar = 0;
let nombre = "";

//Declaración de objeto constructor de producto

class producto {
    constructor (nombre, precio, categoria, stock){
    this.name = nombre;
    this.price = parseFloat(precio);
    this.category = categoria;
    this.stock = stock;
    }
}
const fenderStratocaster = new producto("Fender Stratocaster", 3000, guitarras, 10);
const gibsonlesPaul = new producto("Gibson Les Paul", 4500, guitarras, 10);
const fenderTelecaster = new producto("Fender Telecaster", 3500, guitarras, 10);
const fenderJazz_bass = new producto("Fender Jazz Bass", 3850, bajos, 10);
const gibsonLespaul_bass = new producto("Gibson Les Paul Bass", 4350, bajos, 10);
const fenderPresicion_bass = new producto("Fender Presicion Bass", 5600, bajos, 10);
const dbDrums_bateria = new producto("Batería dbDrums", 8500, baterias, 10);
const gretsch_bateria = new producto("Batería Gretsch", 7900, baterias, 10);
const mapex_bateria = new producto("Batería Mapex", 6900, baterias, 10);



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

  //Declaración del Array "Categorias"

  const categorias = ["Guitarras", "Bajos", "Baterías"]




//Selección de articulo y compra

while (continuar !== 2){

let seleccion = prompt ("Hola " + nombre + " ¿Qué estás buscando?, " + "1- " + categorias[0] + ", 2- " + categorias[1] + ", 3- " + categorias[2]);

if (seleccion == 1) {
    alert("Bienvenido a nuestra sección de Guitarras!");
    let presupuesto = parseFloat(prompt("¿Cual es tu presupuesto para esta compra?"));
    let guitarras = prompt("¿Qué guitarra deseas comprar?, 1- Fender Stratocaster, 2- Gibson Les Paul, 3- Fender Telecaster");
    if (guitarras == 1){
        if (presupuesto >= fenderStratocaster.price){
            alert("Felicitaciones!, has comprado una guitarra Fender Stratocaster.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (guitarras == 2){
        if (presupuesto >= gibsonlesPaul.price){
            alert("Felicitaciones!, has comprado una guitarra Gibson Les Paul.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (guitarras == 3){
        if (presupuesto >= fenderTelecaster.price){
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
        if (presupuesto >= fenderJazz_bass.price){
            alert("Felicitaciones!, has comprado un bajo Fender Jazz Bass.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 2){
        if (presupuesto >= gibsonLespaul_bass.price){
            alert("Felicitaciones!, has comprado un bajo Gibson Les Paul.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 3){
        if (presupuesto >= fenderPresicion_bass.price){
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
        if (presupuesto >= dbDrums_bateria.price){
            alert("Felicitaciones!, has comprado una Batería Db Drums.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 2){
        if (presupuesto >= gretsch_bateria.price){
            alert("Felicitaciones!, has comprado una Batería Gretsch.");
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 3){
        if (presupuesto >= mapex_bateria.price){
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


