document.addEventListener('DOMContentLoaded', function(){ //'DOMcontenloaded' escucha que el documento haya cargado todos los archivos

    eventListeners();

    darkMode();
});

function darkMode(){

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)'); //Leer preferencias del usuario si es modo oscuro o normal

    //console.log(prefiereDarkMode.matches); //Arroja true si tiene como preferencia el modo oscuro

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    } else{
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function(){
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode');
        } else{
            document.body.classList.remove('dark-mode');
        }
    });


    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode') //.toggle agrega y/o quita la clase
    } );
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);

    //Muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', mostrarMetodosContacto));
}



function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    //Si la calse navegacion contiene la clase de mostrar, entonces al dar click se elimina, si no la tiene entonces se crea la clase
    if(navegacion.classList.contains('mostrar')){ 
        navegacion.classList.remove('mostrar');
    }else{
        navegacion.classList.add('mostrar');
    }
}

function mostrarMetodosContacto(e){
    const contactoDiv = document.querySelector('#contacto');

    if(e.target.value === 'telefono'){
        contactoDiv.innerHTML = `
            <label for="telefono">Número Teléfono</label>
            <input type="tel" placeholder="Tu Teléfono" id="telefono" name="contacto[telefono]">

            <p>Elija la fecha y la hora para la llamada</p>

            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha" name="contacto[fecha]">
            
            <label for="hora">Hora:</label>
            <input type="time"  id="hora" min="9:00" max="18:00" name="contacto[hora]">
        `;
    }else{
        contactoDiv.innerHTML = `
        
            <label for="email">E-mail</label>
            <input type="email" placeholder="Tu E-mail" id="email" name="contacto[email]" required>
        
        `;
    }
}