// Animación al hacer scroll: mostrar secciones con efecto
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Animación inicial en íconos de redes sociales
window.addEventListener("load", () => {
  const icons = document.querySelectorAll(".redes a i");
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("pop");
    }, index * 200);
  });
});

// Hover dinámico en imágenes (ya tienes el CSS hover, aquí agregamos efecto extra)
const images = document.querySelectorAll(".imagenes img");
images.forEach(img => {
  img.addEventListener("mouseover", () => {
    img.style.boxShadow = "0 0 20px #e50914";
  });
  img.addEventListener("mouseout", () => {
    img.style.boxShadow = "none";
  });
});
