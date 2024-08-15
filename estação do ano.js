const months = [
	{ name: 'Janeiro', season: 'Verão' },
	{ name: 'Fevereiro', season: 'Verão' },
	{ name: 'Março', season: 'Outono' },
	{ name: 'Abril', season: 'Outono' },
	{ name: 'Maio', season: 'Inverno' },
	{ name: 'Junho', season: 'Inverno' },
	{ name: 'Julho', season: 'Inverno' },
	{ name: 'Agosto', season: 'Primavera' },
	{ name: 'Setembro', season: 'Primavera' },
	{ name: 'Outubro', season: 'Primavera' },
	{ name: 'Novembro', season: 'Verão' },
	{ name: 'Dezembro', season: 'Verão' }
];

let currentMonthIndex = 0;

const changeMonthButton = document.getElementById('change-month');
const monthAndSeasonDiv = document.getElementById('month-and-season');

changeMonthButton.addEventListener('click', () => {
	currentMonthIndex = (currentMonthIndex + 1) % 12;
	const currentMonth = months[currentMonthIndex];
	monthAndSeasonDiv.textContent = `${currentMonth.name} - ${currentMonth.season}`;
});

// Inicializa com o primeiro mês
monthAndSeasonDiv.textContent = `${months[0].name} - ${months[0].season}`;