// ****************************************Animation
document.addEventListener('DOMContentLoaded', function () {
  // Выбираем секцию с галереей
  const gallerySection = document.querySelector('.gallery-section');

  // Выбираем все слайды
  const slides = document.querySelectorAll('.swiper-slide');

  // Настраиваем Observer
  const options = {
    root: null, // Используем viewport как область видимости
    threshold: 0.5, // Запуск анимации, когда 30% секции видны
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем классы с анимацией к каждому слайду
        slides.forEach((slide, index) => {
          // Проверяем, добавлена ли уже анимация
          if (!slide.classList.contains('animated')) {
            // Применяем анимацию по порядку, если это нужно
            if (index % 3 === 0) {
              slide.classList.add('tilt-in-fwd-left');
            } else if (index % 3 === 1) {
              slide.classList.add('tilt-in-fwd-top');
            } else if (index % 3 === 2) {
              slide.classList.add('tilt-in-fwd-right');
            }
            // Убираем opacity, чтобы сделать слайд видимым
            slide.style.opacity = '1';
            // Добавляем класс, чтобы не применять анимацию повторно
            slide.classList.add('animated');
          }
        });
        // Убираем наблюдение после активации анимации
        observer.unobserve(gallerySection);
      }
    });
  }, options);

  // Начинаем наблюдение за секцией галереи
  observer.observe(gallerySection);
});
