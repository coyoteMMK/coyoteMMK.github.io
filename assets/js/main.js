var aside_toggle = document.getElementById('aside-toggle');
var main_content = document.getElementById('main-content'); // Contenedor principal de la página

function toggleMenu() {
    var aside = document.getElementById('aside-nav');
    aside.classList.toggle('active');
    
    if (aside.classList.contains('active')) {
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
        
        // Animación para el aside
        aside.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 400,
            fill: 'forwards'
        });
        
        // Animación para el contenido principal
        main_content.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(250px)' } // Ajusta a la misma anchura del aside
        ], {
            duration: 400,
            fill: 'forwards'
        });
        
        aside.style.display = 'block'; // Mostrar el aside
        
        // Animación para el ícono del botón
        aside_toggle.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 400,
            fill: 'forwards'
        });
    } else {
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        
        // Animación para ocultar el aside
        aside.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-100%)' }
        ], {
            duration: 400,
            fill: 'forwards'
        });

        // Animación para que el contenido principal vuelva a su posición
        main_content.animate([
            { transform: 'translateX(250px)' }, // Ajusta a la misma anchura del aside
            { transform: 'translateX(0)' }
        ], {
            duration: 400,
            fill: 'forwards'
        });

        // Ocultar el aside después de la animación
        setTimeout(() => {
            aside.style.display = 'none';
        }, 400); // Coincide con la duración de la animación
    }
}

window.addEventListener('resize', function() {
    var aside = document.getElementById('aside-nav');
    var aside_toggle = document.getElementById('aside-toggle');
    if (window.innerWidth > 1024) {
        if (!aside.classList.contains('active')) {
            aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        }
        aside.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0%)' }
        ], {
            duration: 0,
            fill: 'forwards'
        });
        
        // Reseteo del contenido principal en tamaño mayor a 1024px
        main_content.style.transform = 'translateX(0)';
    }
});

window.addEventListener('load', function() {
    var bg = document.getElementsByClassName('bg');
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundImage = 'url(' + bg[i].getAttribute('data-bg') + ')';
    }
});

aside_toggle.addEventListener('click', toggleMenu);

