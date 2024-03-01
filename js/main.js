// Swiper slider
const swiper = new Swiper('.swiper', {
	// loop: true,
	// freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
});

// Tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtns) {

	btn.addEventListener('click', function () {
		// Убираем активные классы у всех кнопок
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active');
		}

		// Добавляем активный класс к текущей кнопке
		this.classList.add('tab-controls__btn--active');

		// Отобразить нужные товары и скрыть не нужные
		for (let product of tabsProducts) {

			// Проверка на отображение всех слайдов
			if (this.dataset.tab === 'all') {
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}

		// Update Swiper
		swiper.update()

	})
}

// Mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};

//Cart add value
function updateCartCount(element, count) {
    if (element) {
        element.textContent = count;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки "Add to cart"
    const addToCartButtons = document.querySelectorAll('.card__btn');

    const desktopCartCountElement = document.querySelector('.header__nav .cart__count');
    const mobileCartCountElement = document.querySelector('.mobile-cart .cart__count');

    let desktopCartCount = 0;
    let mobileCartCount = 0;

    // Обработчик события для каждой кнопки
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            desktopCartCount++;
            mobileCartCount++;
            
            updateCartCount(desktopCartCountElement, desktopCartCount);
            updateCartCount(mobileCartCountElement, mobileCartCount);
            
        });
    });
});
