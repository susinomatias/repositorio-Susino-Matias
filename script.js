let alerta = alert("Bienvenido a Soyma. Recorre nuestro sitio para encontrar las pistas ocultas y ganar increibles premios");


 let edad = prompt("para seleccionar los mejores productos acordes a usted, Ingrese su edad.");


if (edad <= 16) {
  alert("Te recomendamos navegar este sitio con la supervición de un adulto");
  console.log(edad);
}

else if ((edad <= 84) / 4) {
  alert("DATO INTERESANTE: Segun su edad usted vivió" + " " + parseInt(edad / 4) + " " + "mundiales.");
  console.log(edad);
}

else (edad >= 90); {
  alert("Gracias. Hemos ajustado nuestro sitio.");
  console.log(edad)
}


const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


form.addEventListener('submit', function(event) {
    event.
   
preventDefault(); 
    
   
const name = nameInput.value;
    
   
const email = emailInput.value;
    
   
const message = messageInput.value;

    
   
console.log('Nombre:', name);
    
   
console.log('Email:', email);
    
   
console.log('Mensaje:', message);

    const data = {
        
        
        name: name,   
       
        email: email,

        message: message
    }; 

  }) 

  const jsonData = JSON.stringify(data);

    
localStorage.setItem('formData', jsonData);

    
    nameInput; 
   
value = '';
    emailInput.
   
value = '';
    messageInput.
   
value = '';
;






// let confirmar = confirm("Este sitio utliza cookies para una mejor experiencia. ¿Deseas aceptarlas?");


// console.log(confirmar);

//  nombre = prompt("Ingrese su nombre"); 
//    apellido = prompt("Ingrese su apodo"); 
//    resultado;

// resultado = nombre + " " + apellido; 


// let edad = prompt("para seleccionar los mejores productos acordes a usted, Ingrese su edad.");


// if (edad <= 16) {
//   alert("Te recomendamos navegar este sitio con la supervición de un adulto");

// }

// else if ((edad <= 84) / 4) {
//   alert("DATO INTERESANTE: Segun su edad usted vivió" + " " + parseInt(edad / 4) + " " + "mundiales. Hemos ajustado nuestro sitio.");
//   console.log(edad);
// }

// else (edad >= 90); {
//   alert("Gracias. Hemos ajustado nuestro sitio.");
//   console.log(edad)
// }

// let nombre = prompt ("Ya que nos gusta mantener el misterio de nuestro sitio web, te desafiamos a continuar con este recorrido de conocernos un poco. Mi nombre es Matias Susino (creador de este sitio). y tu, ¿como te llamas?");
// console.log (nombre); 




// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');


// form.addEventListener('submit', function (event) {
//     event.preventDefault();


//     const name = nameInput.value;
//     const email = emailInput.value;
//     const message = messageInput.value;


//     const userData = {
//         name: name,
//         email: email,
//         message: message
//     };


//     console.log(userData);

// }); 



// const form = document.getElementById('registrationForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');


// form.addEventListener('submit', function(event) {
//     event.preventDefault();


//     const name = nameInput.value;
//     const email = emailInput.value;
//     const password = passwordInput.value;


//     const userData = {
//         name: name,
//         email: email,
//         password: password
//     };

//     localStorage.setItem('userData', JSON.stringify(userData));



// });


// const form = document.getElementById('registrationForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');


// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const name = nameInput.value;
//     const email = emailInput.value;
//     const password = passwordInput.value;

    
//     console.log('Nombre:', name);
//     console.log('Email:', email);
//     console.log('Contraseña:', password);


// });


// const carouselItems = document.querySelectorAll('.carousel-item');
// const carouselIndicators = document.querySelectorAll('.carousel-indicators button');
// const totalButton = document.querySelector('.total');


// function showSlide(index) {
//     carouselItems.forEach((item, i) => {
//         if (i === index) {
//             item.classList.add('active-slide');
//             carouselIndicators[i].classList.add('active');
//         } else {
//             item.classList.remove('active-slide');
//             carouselIndicators[i].classList.remove('active');
//         }
//     });
// }


// function nextSlide() {
//     const currentIndex = Array.from(carouselItems).findIndex(item => item.classList.contains('active-slide'));
//     const nextIndex = (currentIndex + 1) % carouselItems.length;
//     showSlide(nextIndex);
// }


// function previousSlide() {
//     const currentIndex = Array.from(carouselItems).findIndex(item => item.classList.contains('active-slide'));
//     const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
//     showSlide(prevIndex);
// }


// totalButton.addEventListener('click', () => {
//     // Ocultar el elemento totalButton al hacer clic
//     totalButton.style.display = 'none';
// });

// carouselIndicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         showSlide(index);
//     });
// });


// const prevButton = document.querySelector('.carousel-control-prev');
// const nextButton = document.querySelector('.carousel-control-next');

// prevButton.addEventListener('click', previousSlide);
// nextButton.addEventListener('click', nextSlide);


// showSlide(0);















// function bienvenida (nombre) { 
//   console.log (nombre);
//   alert ("Hola, " + nombre + "." + " " + "te damos la bienvenida a SoyMa, esperamos que disfrutes nuestro sitio web.")  
// }

// bienvenida(prompt("ingrese su nombre o apodo para una experiencia más personalizada.")); 


// const producto = [ prompt ("Como ya te habrás dado cuenta, nuestro sitio cuenta con un gran numero de personalizaciones, para que la experiencia de cada usuario sea unica. Te pedimos que ingreses tres cosas que te gusten mucho"), prompt ("Buena eleccion, quedan dos más"), prompt ("Oh, tienes unos gustos muy destacables, uno más y terminamos.") ]
// console.log (producto); 
// alert ("segun tus gustos: " + producto.join(", ") + " " + "eres una persona que sabe lo que quiere."); 









// const productos = [{id : 1, nombre: "Producto1", precio: 1000},
// {id : 2, nombre: "Producto2", precio: 2000}
// ]

// function renderizarProductos() {
//   let listaProductos = document.createElement('ol'); // div

//   for (const producto of productos) {
//       let objProducto = document.createElement('li'); // p
//       // objProducto.innerHTML = JSON.stringify(producto);
//       objProducto.innerHTML = `ID: ${producto.id} | Nombre: ${producto.nombre} | Precio: $${producto.precio}`;
//       listaProductos.append(objProducto);
//   }

//   // alert(JSON.stringify(productos));
//   document.body.append(listaProductos);
// }

// function renderizarProductos2() {

//   for (const producto of productos) {
//       let card = document.createElement('div');
//       card.classList.add('card');

//       // Definimos el innerHTML del elemento con una plantilla de texto
//       card.innerHTML = `<img src="./img/${producto.img}" alt="${producto.nombre}" style="width: 100%" />
//                               <div class="container">
//                                   <h4><b>${producto.nombre}</b></h4>
//                                   <p>$${producto.precio}</p>
//                               </div>`;
//       document.body.appendChild(card);



//   }}




// const carouselExampleCaptions = document.getElementById ("carouselExampleCaptions"); 
// const item1 = document.getElementsByClassName ("item1"); 
// const item2 = document.getElementsByClassName ("item2"); 
// const item3 = document.getElementsByClassName ("item3");
// const total = document.getElementsByClassName ("total") [0]; 
// let productosDelCarrito = []; 

// SumaDeProductos (); 

// function SumaDeProductos() {
//   document.addEventListener("DOMContentLoaded", () => {
//   })
 
  
// } ; 

// function recorrerProductos (){
//   productos.array.forEach(productos => {
    



//   });
// }



// console.log(carouselExampleCaptions); 
// console.log(item1);
// console.log(item2);
// console.log(item3);

// console.log(total);








// HACER UN PROGRAMA QUE TE HAGA ESCRIBIR UNA PALABRA DEFINIDA Y TE CONTABILICE LAS VECES QUE ESCRIBIS ESA PALABRA DE FORMA CORRECTA Y EL TIEMPO QUE DURASTE EN EL "JUEGO", CUANDO TE EQUIVOQUES, SE DETIENE EL PROGRAMA Y TE INDICA CUANTAS VECES BIEN ESCRIBISTE ESA PALABRA Y EL TIEMPO// 












// 


// let numerodelasuerte = Number(prompt("ingrese un numero para que le indiquemos cual es su numero de la suerte")); 

// if (isNaN (numerodelasuerte) || edad == NaN) {

// let numerosuerte = prompt ("eso no es un número, ingrese un numero valido (Se lo diremos antes de salir de nuestro sitio");

// alert (numerosuerte - numerodelasuerte + edad); 

// }





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