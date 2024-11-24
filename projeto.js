let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;

// Atualiza os slides
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide* 100}%)`;
}

// Próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
}

// Slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
}

// Inicia o slider automático
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000); // Troca o slide a cada 3 segundos
}

// Para o slider automático
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Eventos para iniciar e parar o slider ao passar o mouse
document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseleave',startAutoSlide);

// Inicializa o slider
updateSlides();
startAutoSlide();
