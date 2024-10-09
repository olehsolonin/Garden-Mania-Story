import "./js/gallery.js";
import "./js/animation-gallery.js";

const modalControllerBtn = document.getElementById('toggleBtn');
const toggleController = document.getElementById('toggleModal');
const closeBtnController = document.getElementById('closeBtn'); // ID без точки
const homeLink = document.getElementById('homeLink');
const featureLink = document.getElementById('featureLink');
const aboutLink = document.getElementById('aboutLink');
const galleryLink = document.getElementById('galleryLink');
const userLink = document.getElementById('userLink');

// Универсальная функция-обработчик
const handleClick = (event) => {
	console.log(event.currentTarget);  // Показываем, какая кнопка вызвала событие

	// Переключаем класс у модального окна
	toggleController.classList.toggle("is-active");
};

// Добавляем обработчики на кнопки
modalControllerBtn.addEventListener("click", handleClick);
closeBtnController.addEventListener("click", handleClick); // Закрытие через другую кнопку
homeLink.addEventListener("click", handleClick);
featureLink.addEventListener("click", handleClick);
aboutLink.addEventListener("click", handleClick);
galleryLink.addEventListener("click", handleClick);
userLink.addEventListener("click", handleClick);


// -------------------------------

const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const paginationNumbers = document.querySelectorAll('.pagination-number');

let currentIndex = 0;
const totalSlides = slides.length;

// Клонируем первый и последний слайды
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

// Добавляем их в DOM
sliderWrapper.appendChild(firstSlideClone);
sliderWrapper.insertBefore(lastSlideClone, slides[0]);

// Обновляем количество слайдов после клонирования
const allSlides = document.querySelectorAll('.slide');
const totalAllSlides = allSlides.length;

// Устанавливаем слайдер на первый реальный слайд
sliderWrapper.style.transform = `translateX(-${100}%)`;

// Функция для обновления позиции слайдера
function updateSliderPosition() {
	const sliderWidth = document.querySelector('.slider-container').clientWidth;
	sliderWrapper.style.transition = 'transform 0.4s ease-in-out';
	sliderWrapper.style.transform = `translateX(-${(currentIndex + 1) * sliderWidth}px)`;

	// Если текущий индекс — последний слайд (клонированный первый), после анимации мгновенно переходим к первому реальному слайду
	if (currentIndex === totalSlides) {
		setTimeout(() => {
			sliderWrapper.style.transition = 'none';
			currentIndex = 0;
			sliderWrapper.style.transform = `translateX(-${sliderWidth}px)`;
		}, 400);
	}

	// Если текущий индекс — первый слайд (клонированный последний), после анимации мгновенно переходим к последнему реальному слайду
	if (currentIndex === -1) {
		setTimeout(() => {
			sliderWrapper.style.transition = 'none';
			currentIndex = totalSlides - 1;
			sliderWrapper.style.transform = `translateX(-${totalSlides * sliderWidth}px)`;
		}, 400);
	}

	updateActivePagination();
}

nextBtn.addEventListener('click', () => {
	if (currentIndex < totalSlides - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;  // Цикл назад на перший слайд
	}
	updateSliderPosition();
});

// Event listener for previous button
prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalSlides - 1;  // Цикл вперед на останній слайд
	}
	updateSliderPosition();
});

// Обновляем активный элемент пагинации
function updateActivePagination() {
	paginationNumbers.forEach(paginationNumber => paginationNumber.classList.remove('active'));
	let activeIndex = currentIndex === totalSlides ? 0 : currentIndex;
	paginationNumbers[activeIndex].classList.add('active');
}

// Добавляем обработчики событий для пагинации
paginationNumbers.forEach((paginationNumber, index) => {
	paginationNumber.addEventListener('click', () => {
		currentIndex = index;
		updateSliderPosition();
	});
});

// Swipe functionality for mobile devices
let startX = 0;

sliderWrapper.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX;
});

sliderWrapper.addEventListener('touchend', (e) => {
	const endX = e.changedTouches[0].clientX;
	if (startX > endX + 50) {
		// Свайп влево (на следующий слайд)
		currentIndex++;
	} else if (startX < endX - 50) {
		// Свайп вправо (на предыдущий слайд)
		currentIndex--;
	}
	updateSliderPosition();
});

// Инициализируем первый элемент пагинации как активный
updateActivePagination();
