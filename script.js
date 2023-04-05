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

// see more
const itemsContainer = document.getElementById('items-container');
const seeMoreButton = document.getElementById('see-more-button');
const seeLessButton = document.getElementById('see-less-button');
const maxItemsToShow = 6;

// Show the first N items
for (let i = 0; i < maxItemsToShow; i++) {
    const item = itemsContainer.children[i];
    item.classList.add('show');
}

// Add click event listener to the "See More" button
seeMoreButton.addEventListener('click', () => {
    // Show all hidden items
    for (let i = maxItemsToShow; i < itemsContainer.children.length; i++) {
        const item = itemsContainer.children[i];
        item.classList.add('show');
		seeMoreButton.style.display = 'none'
		seeLessButton.style.display = 'inline'
    }
});

// Add click event listener to the "See Less" button
seeLessButton.addEventListener('click', () => {
    // Hide all items except the first N
    for (let i = maxItemsToShow; i < itemsContainer.children.length; i++) {
        const item = itemsContainer.children[i];
        item.classList.remove('show');
		seeMoreButton.style.display = 'inline'
		seeLessButton.style.display = 'none'

    }
});

