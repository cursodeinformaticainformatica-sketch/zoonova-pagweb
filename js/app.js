let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 100}vw)`;
}, 5000);
