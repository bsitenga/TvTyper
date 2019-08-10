import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Textbox = ({onInput, onCharacter, wordList, onKeyDown, onBackspace}) => {

    return (<><div className="textbox-container">
        {wordList.map(item => {
            return <span className={item.status}>{item.letter}</span>
        })}
    </div>
    <input autoFocus type="text" value="" onChange={e => onInput(e.target.value, onCharacter)} onKeyDown={e => onKeyDown(e, onBackspace)}/>
    </>)
}

Textbox.propTypes = {
    onInput: PropTypes.func,
    onCharacter: PropTypes.func,
    wordList: PropTypes.array,
    onkeyDown: PropTypes.func,
    onBackspace: PropTypes.func,
}

export default Textbox;