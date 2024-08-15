const numberInput = document.getElementById('number');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
	const number = parseInt(numberInput.value);
	let fatorial = 1;
	let fatorialText = '';

	for (let i = number; i > 1; i--) {
		fatorial *= i;
		fatorialText += i + 'x';
	}

	fatorialText = fatorialText.substring(0, fatorialText.length - 1); // remove o último "x"
	resultDiv.textContent = `${number}! = ${fatorialText} = ${fatorial}`;
});