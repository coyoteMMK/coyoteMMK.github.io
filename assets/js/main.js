/**
 * Aside show and hide when screen_width = 1024px
 */
var aside_toggle = document.getElementById('aside-toggle');
const asideNav = document.getElementById('aside-nav');
const content = document.querySelector('.content'); // Selecciona el contenedor principal del contenido
/** Aside show and hide when screen_width = 1024px **/
function toggleMenu() {
    asideNav.classList.toggle('active');
    content.classList.toggle('shifted'); // Cambia la clase shifted en el contenido principal

    if (asideNav.classList.contains('active')) {
        asideToggle.innerHTML = '<i class="bx bx-x"></i>';
    } else {
        asideToggle.innerHTML = '<i class="bx bx-menu"></i>';
    }
    var aside = document.getElementById('aside-nav');
    aside.classList.toggle('active');
    if (aside.classList.contains('active')) {
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
        aside.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 400,
            fill: 'forwards'
        });
        aside_toggle.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 400,
            fill: 'forwards'
        });

        aside.style.display = 'block';
    }else if (!aside.classList.contains('active')) {
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        aside.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-100%)' }
        ], {
            duration: 400,
            fill: 'forwards'
        });
        aside_toggle.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 400,
            fill: 'forwards'
        });
    }
}

window.addEventListener('resize', function() {
    var aside = document.getElementById('aside-nav');
    var aside_toggle = document.getElementById('aside-toggle');
    if (window.innerWidth > 1024) { // Verificamos el ancho de la pantalla
        if (!aside.classList.contains('active')) { // Si el menu está cerrado
            aside_toggle.innerHTML = '<i class="bx bx-menu"></i>'; // Cambiamos el icono del boton
        }
        aside.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0%)' }
        ], {
            duration: 0,
            fill: 'forwards'
        });
        
    }
});

window.addEventListener('load', function() {
    var bg = document.getElementsByClassName('bg');
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundImage = 'url(' + bg[i].getAttribute('data-bg') + ')';
    }
});


aside_toggle.addEventListener('click', toggleMenu);
