const ba_shuffle = document.querySelector(".ba_shuffle");
const ba_items = document.querySelectorAll("li");
let ba_block_height = document.querySelector(".ba-weather-list").offsetHeight;


ba_shuffle.addEventListener('click', () => {
	while (true) {
		ba_items.forEach(item => {


			item.style.order = getRandomInt(100);
			console.log(item.style.order);


		});
		if (ba_block_height == document.querySelector(".ba-weather-list").offsetHeight) {
			break;
		}
	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}