// Seleccionar el botón de toggle y el menú lateral (aside)
var aside_toggle = document.getElementById('aside-toggle');

/** Función para mostrar/ocultar el menú lateral (aside) **/
function toggleMenu() {
    var aside = document.getElementById('aside-nav');
    var windowWidth = window.innerWidth; // Ancho actual de la ventana
    
    aside.classList.toggle('active');
    
    if (aside.classList.contains('active')) {
        // Si el menú está activo, cambia el ícono del botón a "X"
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
        
        // Animación y estilo dependiendo del ancho de pantalla
        if (windowWidth > 1024) {
            // Pantallas grandes: el menú ocupará solo una parte de la pantalla (lateral)
            aside.style.width = '300px'; // Ajustar el ancho como lateral
            aside.animate([
                { transform: 'translateX(-300px)' }, // Ancho del lateral
                { transform: 'translateX(0)' }
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else {
            // Pantallas pequeñas: el menú ocupará toda la pantalla
            aside.style.width = '100%'; // Ocupar toda la pantalla
            aside.animate([
                { transform: 'translateX(-100%)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 400,
                fill: 'forwards'
            });
        }
        
    } else {
        // Si el menú está oculto, cambia el ícono del botón a "Menú"
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        
        // Animación de ocultar el menú para ambos casos
        if (windowWidth > 1024) {
            aside.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-300px)' } // Ocultar como lateral
            ], {
                duration: 400,
                fill: 'forwards'
            });
        } else {
            aside.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-100%)' } // Ocultar toda la pantalla
            ], {
                duration: 400,
                fill: 'forwards'
            });
        }
    }
}

// Cargar imágenes de fondo dinámicamente cuando se carga la página
window.addEventListener('load', function() {
    var bg = document.getElementsByClassName('bg');
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundImage = 'url(' + bg[i].getAttribute('data-bg') + ')';
    }
});

// Asignar el evento de clic al botón de menú lateral
aside_toggle.addEventListener('click', toggleMenu);

