const numberInput = document.getElementById('number');
const tableBody = document.getElementById('table-body');
const numberDisplay = document.getElementById('number-display');

numberInput.addEventListener('input', () => {
	const number = parseInt(numberInput.value);
	numberDisplay.textContent = number;

	tableBody.innerHTML = '';

	for (let i = 0; i <= 10; i++) {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${i}</td>
			<td>x</td>
			<td>${number}</td>
			<td>${i * number}</td>
		`;
		tableBody.appendChild(row);
	}
});