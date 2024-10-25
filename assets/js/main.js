var aside_toggle = document.getElementById('aside-toggle');

function toggleMenu() {
    var aside = document.getElementById('aside-nav');
    aside.classList.toggle('active'); // Activa o desactiva la clase 'active'

    if (aside.classList.contains('active')) {
        aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
        aside.style.display = 'block';
    } else {
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        setTimeout(() => {
            aside.style.display = 'none';
        }, 400); // Ocultar después de la animación
    }
}

// Detectar el cambio de tamaño de ventana
window.addEventListener('resize', function() {
    var aside = document.getElementById('aside-nav');

    // Resetear el menú en pantallas grandes
    if (window.innerWidth > 1024) {
        aside.classList.remove('active'); 
        aside.style.display = 'none';
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
    }
});


window.addEventListener('load', function() {
    var bg = document.getElementsByClassName('bg');
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundImage = 'url(' + bg[i].getAttribute('data-bg') + ')';
    }
});


aside_toggle.addEventListener('click', toggleMenu);
