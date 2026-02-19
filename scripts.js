const CHECKBOXES = document.querySelectorAll('#list input[type=checkbox]')
const SUBMIT = document.getElementById('submit');
const RESET = document.getElementById('reset');

SUBMIT.addEventListener('click', function() {
	let score = CHECKBOXES.length;
	for (let box of CHECKBOXES) {
		if (box.checked) score--;
	}
	window.location.href = `./score.html?score=${score}`;
});

RESET.addEventListener('click', function() {
	for (let box of CHECKBOXES) {
		box.checked = false;
	}
});