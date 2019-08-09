import Dictionary from '../Dictionary';

function initialWords() {
	const newWords = Dictionary[0][0].split(' ');
	const newWordArray = [];
	for (let i = 0; i < newWords.length; i++) {
		for (let j = 0; j < newWords[i].length; j++) {
			newWordArray.push({ letter: newWords[i][j], status: 'pending' });
		}
		if (i !== newWords.length - 1) {
			newWordArray.push({ letter: ' ', status: 'pending' });
		}
	}
	return newWordArray;
}

function gameReducer(state = { wordList: initialWords() }, action) {
	switch (action.type) {
		case 'LETTER_ADDED':
			console.log("action", action.letter); 
		default:
			return state
	}
}

export default gameReducer;
