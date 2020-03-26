const ba_shuffle = document.querySelector(".ba_shuffle");
const ba_items = document.querySelectorAll("li");
let ba_block_height = document.querySelector(".ba-weather-list").offsetHeight;


ba_shuffle.addEventListener('click', () => {
	ba_items.forEach(item => {
		while (true) {
			item.style.order = getRandomInt(100);
			if (ba_block_height == document.querySelector(".ba-weather-list").offsetHeight) {
				break;
			}
		}
	});
});

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}