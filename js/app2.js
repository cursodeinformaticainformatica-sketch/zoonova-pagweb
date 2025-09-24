document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-detalles");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarjeta = boton.closest(".producto");
      tarjeta.classList.toggle("activa");
    });
  });
});
