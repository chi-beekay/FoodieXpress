const navMenu = document.getElementById("nav-menu");
const close = document.getElementById("nav-close");
const open = document.getElementById("nav-open");

open.addEventListener("click", () => {
	console.log("open");
	navMenu.classList.add("show-menu");
});

close.addEventListener("click", () => {
	console.log("close");
	navMenu.classList.remove("show-menu");
});


const inputs = document.querySelectorAll('input');

inputs.forEach(function(input){
	input.addEventListener('input', function() {
		const leftIcon = this.parentNode.querySelector('.left');
		leftIcon.style.display = 'none';
	});

	input.addEventListener('blur', function() {
		const leftIcon = this.parentNode.querySelector('.left');
		leftIcon.style.display = 'block';
	});
});


