var aside_toggle = document.getElementById('aside-toggle');
var aside = document.getElementById('aside-nav');

/** Función para mostrar/ocultar el menú lateral **/
function toggleMenu() {
    aside.classList.toggle('active'); // Alternar la clase 'active'

    if (aside.classList.contains('active')) {
        // Si el menú está activo, cambia el ícono del botón a "X"
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
    } else {
        // Si el menú está oculto, cambia el ícono del botón a "Menú"
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
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

