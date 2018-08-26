const trigers = document.querySelectorAll('#main_ul > li');
const background = document.querySelector('span#background');
const nav = document.querySelector('nav');

function showDropdown() {
	this.classList.add('displayBlock');
	setTimeout(() => this.classList.contains('displayBlock') && this.classList.add('opacityOn') , 100);
	background.classList.add('showBackground');

	const dropdown = this.querySelector('.dropdown');
	const dropdown_cords = dropdown.getBoundingClientRect();
	const nav_cords = nav.getBoundingClientRect();
	const cords = {
		width: dropdown_cords.width,
		height: dropdown_cords.height,
		top: dropdown_cords.top,
		left: dropdown_cords.left,
		x: dropdown_cords.x,
		y: dropdown_cords.y
	}
	background.setAttribute('style',`width: ${cords.width}px; height: ${cords.height}px; left: ${cords.left}px; top: ${cords.top}px`);
}

function hideDropdown() {
	setTimeout(() => this.classList.remove('displayBlock', 'opacityOn') , 100);
	background.classList.remove('showBackground');
}

trigers.forEach(triger => triger.addEventListener('mouseenter', showDropdown));
trigers.forEach(triger => triger.addEventListener('mouseleave', hideDropdown));

