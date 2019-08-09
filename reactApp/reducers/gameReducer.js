import Dictionary from '../Dictionary';

function initialWords() {
	const newWords = Dictionary[0][0].split(' ');
	const newWordArray = [];
	for (let i = 0; i < newWords.length; i++) {
		newWordArray.push([]);
		for (let j = 0; j < newWords[i].length; j++) {
			newWordArray[i].push({ letter: newWords[i][j], status: 'pending' });
		}
		if (i !== newWords.length - 1) {
			newWordArray[i].push({ letter: ' ', status: 'pending' });
		}
	}
	return newWordArray;
}

function gameReducer(state = { wordList: initialWords() }, action) {
	switch (action.type) {
		default:
			return state
	}
}

export default gameReducer;
