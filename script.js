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