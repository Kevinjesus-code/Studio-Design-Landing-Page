import { testimonios } from "./Testimonios.js";
const dots = document.querySelectorAll('.elipseSlider');
  const img = document.querySelector('.imageSlider');
  const title = document.querySelector('.titleSlider');
  const paragraph = document.querySelector('.paragraphSlider');

  function updateTestimonio(id) {
    const data = testimonios.find(item => item.id === parseInt(id));
    if (!data) return;

    // Actualiza contenido
    img.src = data.image;
    title.textContent = data.name;
    paragraph.innerHTML = data.testimony.replace(/\n/g, "<br>");

    // Actualiza el color del circulito activo
    dots.forEach(dot => dot.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // Eventos a cada circulito
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateTestimonio(dot.id);
    });
  });

  // Mostrar el primero al inicio
  updateTestimonio("1");