
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.formularioTarjeta');
    
    form.addEventListener('submit', function(event) {
    
        event.preventDefault();
        
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        if (email === '' || password === '') {
            alert('Por favor, complete todos los campos.');
        } else {
          
              window.location.href = "../principal.html"
        }
    });
});
