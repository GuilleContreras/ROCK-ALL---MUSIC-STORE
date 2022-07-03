

//Declaración de Variables

let guitarras = 0;
let bajos = 0;
let baterias = 0;
let continuar = 0;
let nombreCliente = "";

//Declaración de objeto constructor de producto

class producto {
    constructor (nombre, precio, categoria, stock){
    this.name = nombre;
    this.price = parseFloat(precio);
    this.category = categoria;
    this.stock = stock;
    }
}
const fenderStratocaster = new producto("Fender Stratocaster", 3000, "guitarra", 10);
const gibsonlesPaul = new producto("Gibson Les Paul", 4500, "guitarra", 10);
const fenderTelecaster = new producto("Fender Telecaster", 3500, "guitarra", 10);
const fenderJazz_bass = new producto("Fender Jazz Bass", 3850, "bajo", 10);
const gibsonLespaul_bass = new producto("Gibson Les Paul Bass", 4350, "bajo", 10);
const fenderPresicion_bass = new producto("Fender Presicion Bass", 5600, "bajo", 10);
const dbDrums_bateria = new producto("Batería dbDrums", 8500, "batería", 10);
const gretsch_bateria = new producto("Batería Gretsch", 7900, "batería", 10);
const mapex_bateria = new producto("Batería Mapex", 6900, "batería", 10);



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

  //Declaración de Arrays

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
  
  




//Selección de articulo y compra

var seleccion = prompt (" ¿Qué estás buscando?, " + "1- " + categorias[0] + ", 2- " + categorias[1] + ", 3- " + categorias[2]);
let presupuesto = parseFloat(prompt("¿Cual es tu presupuesto para esta compra?"));

while (continuar !== 2){



if (seleccion == 1) {
    alert("Bienvenido a nuestra sección de Guitarras!");
    
    let guitarras = prompt("¿Qué guitarra deseas comprar?, 1- Fender Stratocaster, 2- Gibson Les Paul, 3- Fender Telecaster");
    if (guitarras == 1){
        if (presupuesto >= fenderStratocaster.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderStratocaster.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(fenderStratocaster.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + fenderStratocaster.category + " " + fenderStratocaster.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (guitarras == 2){
        if (presupuesto >= gibsonlesPaul.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + gibsonlesPaul.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(gibsonlesPaul.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + gibsonlesPaul.category + " " + gibsonlesPaul.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (guitarras == 3){
        if (presupuesto >= fenderTelecaster.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderTelecaster.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(fenderTelecaster.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + fenderTelecaster.category + " " + fenderTelecaster.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
    }

} else if (seleccion == 2){
    alert("Bienvenido a nuestra sección de Bajos");
    let bajos = prompt("¿Qué bajo deseas comprar?, 1- Fender Jazz Bass, 2- Gibson Les Paul, 3- Fender Presicion Bass  ");
    if (bajos == 1){
        if (presupuesto >= fenderJazz_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderJazz_bass.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(fenderJazz_bass.price - presupuesto); 
            alert("Felicitaciones!, has comprado un " + fenderJazz_bass.category + " " + fenderJazz_bass.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 2){
        if (presupuesto >= gibsonLespaul_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + gibsonLespaul_bass.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(gibsonLespaul_bass.price - presupuesto); 
            alert("Felicitaciones!, has comprado un " + gibsonLespaul_bass.category + " " + gibsonLespaul_bass.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
        
    }
    else if (bajos == 3){
        if (presupuesto >= fenderPresicion_bass.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + fenderPresicion_bass.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(fenderPresicion_bass.price - presupuesto); 
            alert("Felicitaciones!, has comprado un " + fenderPresicion_bass.category + " " + fenderPresicion_bass.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else {
        alert("Tu selección no es válida, por favor volvé a elegir nuevamente.");
    }

} else if (seleccion == 3){
    alert("Bienvenido a nuestra sección de Baterias");
    let baterias = prompt("¿Qué bateria deseas comprar?, 1- Db Drums, 2- Gretsch, 3- Mapex");
    if (baterias == 1){
        if (presupuesto >= dbDrums_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + dbDrums_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(dbDrums_bateria.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + dbDrums_bateria.category + " " + dbDrums_bateria.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 2){
        if (presupuesto >= gretsch_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + gretsch_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(gretsch_bateria.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + gretsch_bateria.category + " " + gretsch_bateria.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
        } else {
            alert("No tienes suficiente dinero para realizar la compra.");
        }
    }
    else if (baterias == 3){
        if (presupuesto >= mapex_bateria.price){
            
            let confirmacion = parseFloat(prompt("Estás a punto de comprar una " + mapex_bateria.name + " , ¿deseas confirmar la compra? 1-SI 2-NO"));
            
            if (confirmacion == 1){
            presupuesto = Math.abs(mapex_bateria.price - presupuesto); 
            alert("Felicitaciones!, has comprado una " + mapex_bateria.category + " " + mapex_bateria.name);
            alert("Te quedan $" + presupuesto + " para continuar comprando." );
        }
        
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

    if (continuar == 1){
        seleccion = prompt (" ¿Qué estás buscando?, " + "1- " + categorias[0] + ", 2- " + categorias[1] + ", 3- " + categorias[2]);
        
    }
    else{
        break;
    }
    

}


alert("Gracias por tu visita, vuelve a recargar la pagina para comenzar nuevamente.")


