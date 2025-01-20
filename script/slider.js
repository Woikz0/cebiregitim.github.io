let currentIndex = 0;

function updateSlider() {
  const slider = document.querySelector('.slider');
  const slideWidth = slider.querySelector('img').clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  const slider = document.querySelector('.slider');
  const totalSlides = slider.querySelectorAll('img').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  const slider = document.querySelector('.slider');
  const totalSlides = slider.querySelectorAll('img').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Tarayıcı boyutu değiştiğinde slider'ı güncelle
window.addEventListener('resize', updateSlider);
