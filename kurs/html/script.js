document.addEventListener('DOMContentLoaded', () => {
	const hearts = document.querySelectorAll('.heart-icon');
	const favoritesLink = document.querySelector('.favorites-link');
	const cartLink = document.querySelector('.cart-link');

	// Обработка иконок избранного
	hearts.forEach(heart => {
		heart.addEventListener('click', () => {
			heart.classList.toggle('active');
			// Логика добавления/удаления из избранного
		});
	});

	// Уведомление о добавлении в корзину
	const cartButtons = document.querySelectorAll('.add-to-cart');
	cartButtons.forEach(button => {
		button.addEventListener('click', () => {
			alert('Товар успешно добавлен в корзину!');
		});
	});

	// Тоггл меню на телефоне
	const menuToggle = document.querySelector('.menu-toggle');
	const mainMenu = document.querySelector('.main-menu ul');
	menuToggle.addEventListener('click', () => {
		menuToggle.classList.toggle('active');
		mainMenu.classList.toggle('open');
	});
});


