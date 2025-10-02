// function toggleGanador() {
//   const ganador = document.querySelector('.ganador');
//   if (ganador.style.display === 'none' || ganador.style.display === '') {
//       ganador.style.display = 'flex'; // Muestra
//   } else {
//       ganador.style.display = 'none'; // Oculta
//   }
// }

document.querySelectorAll(".boton-ganador").forEach(button => {
  button.addEventListener("click", () => {
    const caja = button.nextElementSibling;
    caja.style.display = caja.style.display === "flex" ? "none" : "flex";
    button.classList.toggle("active");
  });
});