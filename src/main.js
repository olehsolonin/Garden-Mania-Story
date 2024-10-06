// Получаем кнопки и модальное окно
const modalControllerBtn = document.getElementById('toggleBtn');
const toggleController = document.getElementById('toggleModal');
const closeBtnController = document.getElementById('closeBtn'); // ID без точки

// Универсальная функция-обработчик
const handleClick = (event) => {
	console.log(event.currentTarget);  // Показываем, какая кнопка вызвала событие

	// Переключаем класс у модального окна
	toggleController.classList.toggle("is-active");
};

// Добавляем обработчики на кнопки
modalControllerBtn.addEventListener("click", handleClick);
closeBtnController.addEventListener("click", handleClick); // Закрытие через другую кнопку
