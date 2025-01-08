const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Lista de imágenes para el fondo
const imagenes = [
    '../img/fondos/2025-01-04_19.34.24.png',
    '../img/fondos/2025-01-06_09.51.46.png'
];

let index = 0;
const fondo = document.getElementById('fondo');

// Función para cambiar el fondo cada 5 minutos
function cambiarFondo() {
    fondo.style.backgroundImage = `url(${imagenes[index]})`;
    index = (index + 1) % imagenes.length; // Avanza al siguiente índice y reinicia si es necesario
}

// Cambiar el fondo inmediatamente y luego cada 5 minutos (300000 ms)
cambiarFondo();
setInterval(cambiarFondo, 300000);
