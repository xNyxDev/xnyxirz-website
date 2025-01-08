const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Ruta de la carpeta de imágenes
const carpetaImagenes = '../img/fondos';
const imagenes = ['2025-01-04_19.34.24.png', '2025-01-06_09.51.46.png']; // Lista de imágenes
let indiceActual = 0;
const intervalo = 5 * 60 * 1000; // 5 minutos en milisegundos

// Función para cambiar la imagen de fondo
function cambiarFondo() {
    const fondo = document.getElementById('fondo');
    fondo.style.backgroundImage = `url('${carpetaImagenes}${imagenes[indiceActual]}')`;
    indiceActual = (indiceActual + 1) % imagenes.length; // Cicla a la siguiente imagen
}

// Cambia el fondo inmediatamente al cargar la página
cambiarFondo();

// Cambia el fondo cada 5 minutos
setInterval(cambiarFondo, intervalo);
