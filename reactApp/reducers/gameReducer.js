import Dictionary from '../Dictionary';

function initialWords() {
	const newWords = Dictionary.Frasier[Math.floor(Math.random() * Math.floor(Dictionary.Frasier.length))];
	const newWordArray = [];
	for (let i = 0; i < newWords.length; i++) {
		newWordArray.push({ letter: newWords[i], status: 'pending' });
	}
	return newWordArray;
}

function gameReducer(
	state = {
		wordList: initialWords(),
		currIndex: 0,
		WPM: 0,
		gameTimer: 0,
		gameStarter: 5,
		gameStatus: 'before',
		progress: 0
	},
	action
) {
	switch (action.type) {
		case 'LETTER_ADDED':
			const letterList = state.wordList.slice(0);
			let addStatus = state.gameStatus;
			let addIndex = state.currIndex;
			if (action.letter.length === 1 && state.currIndex < state.wordList.length) {
				addIndex++;
				if (action.letter === letterList[state.currIndex].letter) {
					letterList[state.currIndex].status = 'correct';
					if (state.currIndex === state.wordList.length - 1) {
						let allCorrect = true;
						for (let i = 0; i < state.wordList.length - 1; i++) {
							if (letterList[i].status !== 'correct') {
								allCorrect = false;
								break;
							}
						}
						if (allCorrect) {
							addStatus = 'end';
						}
					}
				} else {
					letterList[state.currIndex].status = 'incorrect';
				}
			}

			return {
				wordList: letterList,
				currIndex: addIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStatus: addStatus,
				progress: state.currIndex / (state.wordList.length - 1)
			};
		case 'BACKSPACE':
			const backspaceList = state.wordList.slice(0);
			let backIndex = state.currIndex;
			if (state.currIndex !== 0 && state.gameStatus !== 'end') {
				backspaceList[state.currIndex - 1].status = 'pending';
				backIndex--;
			}
			return {
				wordList: backspaceList,
				currIndex: backIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStatus: state.gameStatus,
				progress: state.currIndex / (state.wordList.length - 1)
			};
		case 'INCREASE':
			let increaseWPM = state.WPM;
			let increaseTimer = state.gameTimer;
			if (state.gameStatus === 'during') {
				increaseTimer++;
			}
			if (state.gameTimer === 1) {
				increaseWPM = state.currIndex / 4.25 / (state.gameTimer * 3 / 60);
			} else if (state.gameTimer === 2) {
				increaseWPM = state.currIndex / 4.25 / (state.gameTimer * 2 / 60);
			} else if (state.gameTimer > 2) {
				increaseWPM = state.currIndex / 4.25 / (state.gameTimer / 60);
			}
			return {
				wordList: state.wordList,
				currIndex: state.currIndex,
				WPM: Math.floor(increaseWPM),
				gameTimer: increaseTimer,
				gameStarter: state.gameStarter,
				gameStatus: state.gameStatus,
				progress: state.progress
			};
		case 'STATUS':
			return {
				wordList: state.wordList,
				currIndex: state.currIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStarter: state.gameStarter,
				gameStatus: action.status,
				progress: state.progress
			};
		case 'NEWSHOW':
			const newWords = Dictionary[action.tvShow][Math.floor(Math.random() * Math.floor(Dictionary[action.tvShow].length))];
			const newWordArray = [];
			for (let i = 0; i < newWords.length; i++) {
				newWordArray.push({ letter: newWords[i], status: 'pending' });
			}
			return {
				wordList: newWordArray,
				currIndex: state.currIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStarter: state.gameStarter,
				gameStatus: state.gameStatus,
				progress: state.progress
			};
		default:
			return state;
	}
}

export default gameReducer;
