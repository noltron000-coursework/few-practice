// note: the result from the assignment was an impossible outcome.
// the result has instead been shifted at position (3,3) to 'X' to fix this.

const game = [
	'o', 'o', 'x',
	'o', 'x', 'o',
	'x', 'o', 'x'
]

const draw = (game) => {
	let row = ''
	for (let index = 0; index < 10; index++) {
		row += game[index]
		if (index % 3 == 2) {
			console.log(row);
			row = ''
		}
		else {
			row += ' '
		}
	}
}

draw(game)