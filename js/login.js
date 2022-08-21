let password1 = document.getElementById('password1');


function validateEmail(){
                
    // Get our input reference.
    var emailField = document.getElementById('email');
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) & password1.value.length > 8){
        
        return true;
    }if (!validEmail.test(emailField.value)) {
        alert('El email ingresado es invalido');
        return false;
        
    } if (password1.value.length < 7) {
        alert('La contraseña ingresada es invalida');
        return false;
    }
    alert("Ingrese los datos en los campos")
        return false;
    }
/* function redirigir () {
    if (validateEmail == true) {
        location.replace("./index.html")
    } else {
        event.preventDefault();
    }
} */

/* document.getElementById('registro').addEventListener('submit', function(evento) {
    // Verifico que los campos no sean igual a 0, que la contraseña sea mayor a 6 carateres y que sean iguales, verifico en ultimo caso los Terminos.
    if ( email.value == (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) || password1.value.length < 6) {
        // si no se cumple lo anterior:
        console.log("ERROR EN VALIDACION");
        
        evento.preventDefault();
    } else {
        // si todo lo anterior es correcto entonces:
        console.log("VALIDACION CORRECTADA ezelente");
        
        evento.preventDefault();// Para que se muestre la alerta de suceso.
    }


}); */