const menu = document.getElementById("menu");
const close = document.getElementById("nav-close");
// const toggleNav = document.getElementById("toggleNav");
const toggleNav = document.querySelector("#toggleNav")

toggleNav.addEventListener("click", () => {
	console.log("open");
	menu.classList.add("active");
});

close.addEventListener("click", () => {
	console.log("close");
	menu.classList.remove("active");
});