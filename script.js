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


const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const resultContainer = document.getElementById('result-container');


function showSearchData(searchTerm) {

  const resultText = document.createElement('p');
  resultText.textContent = `Has buscado: ${searchTerm}`;

  resultContainer.appendChild(resultText);
}


function search() {

  const searchTerm = searchInput.value.trim();


  showSearchData(searchTerm);
}


searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  search(); 
});
