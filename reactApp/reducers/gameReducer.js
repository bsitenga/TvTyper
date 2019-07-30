import Dictionary from '../Dictionary';

function initialWords() {
    const newWords = newDictionary[0].split(' ');
    const newWordArray = [];
    for (let i = 0; i < newWords.length; i++) {
        newWordArray.push([]);
        for (let j = 0; j < newWords[i].length; j++) {
            newWordArray[i].push({ letter: newWords[i][j], status: 'pending' });
        }
        newWordArray[i].push({})
    }
    return newWordArray;
}

function gameReducer() {
}

export default gameReducer;
