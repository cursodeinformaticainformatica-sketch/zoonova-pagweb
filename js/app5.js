document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const respuesta = document.getElementById("respuesta");
  respuesta.classList.remove("oculto");
  this.reset();
});
