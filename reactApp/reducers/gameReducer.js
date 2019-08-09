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

function gameReducer(state = { wordList: initialWords(), currIndex: 0 }, action) {
	switch (action.type) {
		case 'LETTER_ADDED':
			const letterList = state.wordList.slice(0);
			if (action.letter.length === 1) {
				if (action.letter === letterList[state.currIndex].letter) {
					letterList[state.currIndex].status = 'correct';
				} else {
					letterList[state.currIndex].status = 'incorrect';
				}
			}
			return { wordList: letterList, currIndex: state.currIndex + 1}
		default:
			return state
	}
}

export default gameReducer;
