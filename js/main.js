// ---------- Visor de fotos (index.html) ----------
const visor = document.getElementById("visor");

if (visor) {
  const visorImg = document.getElementById("visor-img");
  const visorTexto = document.getElementById("visor-texto");

  document.querySelectorAll(".foto").forEach((boton) => {
    boton.addEventListener("click", () => {
      visorImg.src = boton.dataset.grande;
      visorImg.alt = boton.querySelector("img").alt;
      visorTexto.textContent = boton.dataset.texto;
      visor.showModal();
    });
  });

  document.getElementById("visor-cerrar").addEventListener("click", () => visor.close());

  // Cerrar al hacer clic fuera de la foto
  visor.addEventListener("click", (e) => {
    if (e.target === visor) visor.close();
  });
}

// ---------- Formulario (contacto.html) ----------
const formulario = document.getElementById("formulario");

if (formulario) {
  const estado = document.getElementById("estado");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    estado.className = "estado";
    estado.textContent = "";

    // Muestra los avisos del navegador si falta algún campo
    if (!formulario.reportValidity()) return;

    // Aquí iría el envío real (fetch a Formspree, etc.)
    estado.className = "estado ok";
    estado.textContent = "Mensaje enviado. Te respondemos en un día laborable.";
    formulario.reset();
  });
}
