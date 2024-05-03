interface BallonI {
	id: number
	isPublic: boolean
}

/**
 * @description имитация fetch. возвращает количество шариков
 * @param {Number} id ID шарика по цвету
 * @returns {Number} количество шариков
 * @example const res = await fetchBallonAmount(202);
 */
async function fetchBallonAmount(id: BallonI['id']): Promise<number> {
	const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000); // 1-9 секунд
	const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id); // случайное число

	return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT));
}

// данные о шариках
const BALLONS: { [key: string]: BallonI } = {
	red: {
		id: 202,
		isPublic: true,
	},
	blue: {
		id: 356,
		isPublic: false,
	},
	yellow: {
		id: 451,
		isPublic: false,
	},
	black: {
		id: 35,
		isPublic: true,
	},
	green: {
		id: 191,
		isPublic: true,
	},
	white: {
		id: 911,
		isPublic: true,
	},
};

// Ваш код здесь
async function getTotalPublicBallonsAmount(): Promise<number> {
	let totalAmount = 0;

	// Проходимся по каждому шарику в объекте BALLONS
	for (const color in BALLONS) {
		const ballon = BALLONS[color];

		// Проверяем, является ли шарик общедоступным (isPublic === true)
		if (ballon.isPublic) {
			// Вызываем fetchBallonAmount для получения количества шариков определенного цвета
			const amount = await fetchBallonAmount(ballon.id);
			// Суммируем количество шариков
			totalAmount += amount;
		}
	}

	return totalAmount;
}

// Вызываем функцию и выводим результат
getTotalPublicBallonsAmount().then(total => {
	console.log('Total number of public ballons:', total);
}).catch(err => {
	console.error('Error:', err);
});
