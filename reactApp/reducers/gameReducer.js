import Dictionary from '../Dictionary';

function initialWords() {
	const newWords = Dictionary[0][0];
	const newWordArray = [];
	for (let i = 0; i < newWords.length; i++) {
		newWordArray.push({letter: newWords[i], status: 'pending' })
	}
	return newWordArray;
}

function gameReducer(
	state = { wordList: initialWords(), currIndex: 0, WPM: 0, gameTimer: 0, gameStarter: 5, gameStatus: 'before' },
	action
) {
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

			return {
				wordList: letterList,
				currIndex: state.currIndex + 1,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStatus: state.gameStatus
			};
		case 'BACKSPACE':
			const backspaceList = state.wordList.slice(0);
			backspaceList[state.currIndex - 1].status = 'pending';
			return {
				wordList: backspaceList,
				currIndex: state.currIndex - 1,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStatus: state.gameStatus
			};
		case 'INCREASE':
			let increaseWPM = state.WPM;
			if (state.gameTimer === 1) {
				increaseWPM = state.currIndex / 5 / (state.gameTimer * 3 / 60);
			} else if (state.gameTimer === 2) {
				increaseWPM = state.currIndex / 5 / (state.gameTimer * 2 / 60);
			} else if (state.gameTimer > 2) {
				increaseWPM = state.currIndex / 5 / (state.gameTimer / 60);
			}
			return {
				wordList: state.wordList,
				currIndex: state.currIndex,
				WPM: Math.floor(increaseWPM),
				gameTimer: state.gameTimer + 1,
				gameStarter: state.gameStarter,
				gameStatus: state.gameStatus
			};
		case 'STATUS':
			return {
				wordList: state.wordList,
				currIndex: state.currIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStarter: state.gameStarter,
				gameStatus: action.status
			};
		default:
			return state;
	}
}

export default gameReducer;
