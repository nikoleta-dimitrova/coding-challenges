function countDown() {
	let sec = 3;
	const numbers = document.getElementById("timer");
	const timer = setInterval(() => {
		numbers.innerHTML = sec--;
		if (sec <=3) numbers.style.color = "white";
		if (sec < 1) clearInterval(timer);
	}, 1000);
}

countDown();