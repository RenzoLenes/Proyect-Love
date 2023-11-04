var noBtn = document.getElementById("noBtn");

function moveButton() {
    noBtn.style.top = Math.random() * 90 + "vh";  // Establece una posición vertical aleatoria
    noBtn.style.left = Math.random() * 90 + "vw";  // Establece una posición horizontal aleatoria
}

// Llama a la función moveButton cuando el mouse pasa por encima del botón "No"
noBtn.addEventListener("mouseover", moveButton);

var siBtn = document.getElementById("siBtn");
var videoPopup = document.getElementById("videoPopup");
var overlay = document.getElementById("overlay");
var closeButton = document.getElementById("closeButton");

// Función para mostrar el video emergente y el fondo oscuro
function showVideo() {
    overlay.style.display = "block"; // Muestra el fondo oscuro
    videoPopup.style.display = "block"; // Muestra el video emergente
    videoPopup.play(); // Inicia la reproducción del video
}

// Función para ocultar el video emergente y el fondo oscuro
function hideVideo() {
    overlay.style.display = "none"; // Oculta el fondo oscuro
    videoPopup.style.display = "none"; // Oculta el video emergente
    videoPopup.pause(); // Pausa la reproducción del video
}

// Asigna la función showVideo al evento click del botón "Sí"
siBtn.addEventListener("click", showVideo);

// Asigna la función hideVideo al evento click del botón de cierre
closeButton.addEventListener("click", hideVideo);

