alert ("Bienvenido a Rock All, tu tienda de instrumentos musicales");
let nombre = prompt ("Para comenzar decinos tu nombre");
let seleccion = prompt ("Hola " + nombre + " ¿Qué estás buscando?, 1- Guitarras, 2- Bajos, 3- Baterias");

//Selección de articulo

if (seleccion == 1) {
    alert("Bienvenido a nuestra sección de Guitarras!");
} else if (seleccion == 2){
    alert("Bienvenido a nuestra sección de Bajos")
} else if (seleccion == 3){
    alert("Bienvenido a nuestra sección de Baterias")
} else {
    alert("Tu selección no es válida, por favor volvé a elegir nuevamente");
}