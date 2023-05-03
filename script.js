let inicio = confirm("!Hola¡ Te damos la bienvenida a SM. En este sitio encontrarás sorpresas ocultas y mucho más, ¿Te sumas a la aventura?");

let saludar = "hola, ";

let edad = prompt("para seleccionar los mejores productos acordes a usted, Ingrese su edad.");

if   (edad <= 16) {
    alert("Te recomendamos navegar este sitio con la supervición de un adulto");

}

else if ((edad <= 84) / 4) {
    alert("DATO INTERESANTE: Segun su edad usted vivió" + " " + parseInt(edad / 4) + " " + "mundiales. Hemos ajustado nuestro sitio.");
    console.log(edad);

}

else (edad >= 90); {
    alert("Gracias. Hemos ajustado nuestro sitio.");
    console.log(edad)

}

let nombre = prompt("Ya que nos gusta mantener el misterio de nuestro sitio web, te desafiamos a continuar con este recorrido de conocernos un poco. Mi nombre es Matias Susino (creador de este sitio). y tu, ¿como te llamas?");
console.log(nombre);

function saludarcompilado(saludar, nombre) {
    //let saludofinal = (saludar + nombre); 
    // console.log(saludofinal); 

}

saludarcompilado(alert(saludar + nombre + "!"));


let numerodelasuerte = Number(prompt("ingrese un numero para que le indiquemos cual es su numero de la suerte")); 

if (isNaN (numerodelasuerte) || edad == NaN) {

let numerosuerte = prompt ("eso no es un número, ingrese un numero valido (Se lo diremos antes de salir de nuestro sitio");

alert (numerosuerte - numerodelasuerte + edad); 

}




// }
//  alert (numerosuerte == Number()); {
//  ("su numero de la suerte es: " + numerodelasuerte); 
    
//     }

//let saludar = "espero que disfrutes esta experiencia";

//function compilarnombre (nombre, saludar);

//return compilarnombre (alert( (saludar + " " + nombre)));

//alert (saludar + " " + nombre);

//let saludar = alert ("Hola,");

//function sumar(a, b) {
//  return a + b;
//}

//console.log(sumar(2, 3)); // Salida: 5

//else if (edad !== "string"); {
 // prompt("Ingresá un valor correcto");
//}

//let alerta = alert("Bienvenido a Soyma. Recorre nuestro sitio para encontrar las pistas ocultas y ganar increibles premios");

//let confirmar = confirm("Este sitio utliza cookies para una mejor experiencia. ¿Deseas aceptarlas?");

//console.log(confirmar);

//if (confirmar) {
 //   alert("!Gracias!");}

//let nombre = prompt("Ingrese su nombre"),
  //  apellido = prompt("Ingrese su apodo"),
  //  resultado;

//resultado = nombre + " " + apellido,

//console.log(alert("bienvenido" + " " + resultado));

//alert("este sitio utiliza cookies");//
//  prompt("hola"); //
//confirm("si");//              