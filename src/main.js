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

// Event listener for next button
nextBtn.addEventListener('click', () => {
	if (currentIndex < totalSlides - 1) {
		currentIndex++;
	} else {
		currentIndex = 0;
	}
	updateSliderPosition();
});

// Event listener for previous button
prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = totalSlides - 1;
	}
	updateSliderPosition();
});

// Update slider position based on current index
function updateSliderPosition() {
	const sliderWidth = document.querySelector('.slider-container').clientWidth;
	sliderWrapper.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
	updateActivePagination();
}

// Add click event listeners to pagination numbers
paginationNumbers.forEach((paginationNumber, index) => {
	paginationNumber.addEventListener('click', () => {
		currentIndex = index;
		updateSliderPosition();
	});
});

// Update active pagination number style
function updateActivePagination() {
	paginationNumbers.forEach(paginationNumber => paginationNumber.classList.remove('active'));
	paginationNumbers[currentIndex].classList.add('active');
}

// Swipe functionality for mobile devices
let startX = 0;

sliderWrapper.addEventListener('touchstart', (e) => {
	startX = e.touches[0].clientX;
});

sliderWrapper.addEventListener('touchend', (e) => {
	const endX = e.changedTouches[0].clientX;
	if (startX > endX + 50) {
		// Swiped left
		if (currentIndex < totalSlides - 1) {
			currentIndex++;
		} else {
			currentIndex = 0;
		}
	} else if (startX < endX - 50) {
		// Swiped right
		if (currentIndex > 0) {
			currentIndex--;
		} else {
			currentIndex = totalSlides - 1;
		}
	}
	updateSliderPosition();
});

// Initialize first pagination number as active
updateActivePagination();

