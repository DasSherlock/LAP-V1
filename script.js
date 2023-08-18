const botonUltimo = document.getElementById('botonUltimo');
botonUltimo.addEventListener("click", function handleClick() {
    alert('Enviaste la cosa exitosamente... A y sos gay :]')
});

const form = document.getElementById('form1');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

  if (!validateEmail(email)){
     alert('Por favor ingrese un correo electrónico valido. no sea trolo');
    } else {
     alert('Correo electrónico enviado correctamente, gracias gay :).');
    }
}