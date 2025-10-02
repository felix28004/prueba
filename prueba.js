document.querySelectorAll(".boton").forEach(button => {
  button.addEventListener("click", () => {
    const contenido = button.nextElementSibling;
    contenido.style.display = contenido.style.display === "flex" ? "none" : "flex";
    button.classList.toggle("active");
  });
});

function toggleGanador() {
  const ganador = document.querySelector('.ganador');
  if (ganador.style.display === 'none' || ganador.style.display === '') {
      ganador.style.display = 'flex'; // Muestra
  } else {
      ganador.style.display = 'none'; // Oculta
  }
}
  