import SavingsCalculator from './calc/calc.js'
// Аккордион
new SavingsCalculator()

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
}

// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

// Анимация
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('action');
		}
	});
}
let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animated');
for (let elm of elements) {
	observer.observe(elm);
}

// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}