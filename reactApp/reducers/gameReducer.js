import Dictionary from '../Dictionary';

function initialWords() {
	let anyShow = Dictionary.allShows[Math.floor(Math.random() * Math.floor(Dictionary.allShows.length))]
	const newWords = Dictionary[anyShow][Math.floor(Math.random() * Math.floor(Dictionary[anyShow].length))];
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
		progress: 0,
		passageLength: 'all',
		passageShow: 'any show'
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
				progress: state.currIndex / (state.wordList.length - 1),
				passageLength: state.passageLength,
				passageShow: state.passageShow
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
				progress: state.currIndex / (state.wordList.length - 1),
				passageLength: state.passageLength,
				passageShow: state.passageShow
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
				progress: state.progress,
				passageLength: state.passageLength,
				passageShow: state.passageShow
			};
		case 'STATUS':
			return {
				wordList: state.wordList,
				currIndex: state.currIndex,
				WPM: state.WPM,
				gameTimer: state.gameTimer,
				gameStarter: state.gameStarter,
				gameStatus: action.status,
				progress: state.progress,
				passageLength: state.passageLength,
				passageShow: state.passageShow
			};
		case 'NEWSHOW':
			const newWords =
				Dictionary[action.tvShow][Math.floor(Math.random() * Math.floor(Dictionary[action.tvShow].length))];
			const newWordArray = [];
			for (let i = 0; i < newWords.length; i++) {
				newWordArray.push({ letter: newWords[i], status: 'pending' });
			}
			return {
				wordList: newWordArray,
				currIndex: 0,
				WPM: 0,
				gameTimer: 0,
				gameStarter: 5,
				gameStatus: 'before',
				progress: 0,
				passageLength: state.passageLength,
				passageShow: action.tvShow
			};
		case 'NEWPRACTICE':
			let newPracticeWords;
			console.log(state.passageShow);	
			if (state.passageShow === 'any show') {
				console.log(1);
				let anyShow = Dictionary.allShows[Math.floor(Math.random() * Math.floor(Dictionary.allShows.length))]
				newPracticeWords = Dictionary[anyShow][Math.floor(Math.random() * Math.floor(Dictionary[anyShow].length))];
			} else {
				console.log(2);
				newPracticeWords = Dictionary[state.passageShow][Math.floor(Math.random() * Math.floor(Dictionary[state.passageShow].length))];
			}
			const newPracticeArray = [];
			for (let i = 0; i < newPracticeWords.length; i++) {
				newPracticeArray.push({letter: newPracticeWords[i], status: 'pending'});
			}
			return {
				wordList: newPracticeArray,
				currIndex: 0,
				WPM: 0,
				gameTimer: 0,
				gameStarter: 5,
				gameStatus: 'before',
				progress: 0,
				passageLength: state.passageLength,
				passageShow: state.passageShow
			};
		default:
			return state;
	}
}

export default gameReducer;
