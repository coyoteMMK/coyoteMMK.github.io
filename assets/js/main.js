
var aside_toggle = document.getElementById('aside-toggle');
var aside = document.getElementById('aside-nav');
var content = document.querySelector('.content'); // Contenedor principal de contenido
var banner = document.querySelector('.banner'); // Contenedor de banners

/** Función para mostrar/ocultar el menú lateral **/
function toggleMenu() {
    aside.classList.toggle('active'); // Alternar clase 'active' para el menú

    if (aside.classList.contains('active')) {
        // Añadir clase para el contenido y banners cuando el menú está activo
        content.classList.add('menu-visible');
        banner.classList.add('menu-visible');
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
    } else {
        // Quitar la clase cuando el menú esté oculto
        content.classList.remove('menu-visible');
        banner.classList.remove('menu-visible');
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

