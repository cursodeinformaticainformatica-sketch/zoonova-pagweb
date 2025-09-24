document.addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador");

  contadores.forEach(contador => {
    let tiempo = parseInt(contador.dataset.tiempo);

    const actualizar = () => {
      if (tiempo <= 0) {
        contador.textContent = "¡Oferta finalizada!";
        return;
      }

      const horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
      const minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
      const segundos = String(tiempo % 60).padStart(2, '0');

      contador.textContent = `Tiempo restante: ${horas}:${minutos}:${segundos}`;
      tiempo--;
    };

    actualizar();
    setInterval(actualizar, 1000);
  });
});