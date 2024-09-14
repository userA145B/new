window.onload = function() {
    const verContenidoBtn = document.getElementById("verContenido");
    const noVerContenidoBtn = document.getElementById("noVerContenido");
    const popup = document.getElementById("popup");
    const contenido = document.getElementById("contenido");
    const imagen = document.getElementById("imagen");  // Referencia a la imagen
    const audio = document.getElementById("audio");

    // Evento para el botón "Ver contenido"
    verContenidoBtn.addEventListener("click", function() {
        popup.style.display = "none";  // Oculta el popup
        contenido.style.display = "flex";  // Muestra el contenedor del contenido
        imagen.style.display = "block";  // Muestra la imagen a pantalla completa
        audio.play();  // Reproduce el audio
    });

    // Evento para el botón "No ver contenido"
    noVerContenidoBtn.addEventListener("click", function() {
        window.close();  // Cierra la página si el dispositivo lo permite
    });
};
