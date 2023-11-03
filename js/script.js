var noBtn = document.getElementById("noBtn");

function moveButton() {
    noBtn.style.top = Math.random() * 90 + "vh";  // Establece una posición vertical aleatoria
    noBtn.style.left = Math.random() * 90 + "vw";  // Establece una posición horizontal aleatoria
}

// Llama a la función moveButton cuando el mouse pasa por encima del botón "No"
noBtn.addEventListener("mouseover", moveButton);
