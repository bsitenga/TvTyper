import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const Textbox = ({onInput, onCharacter, wordList}) => {

    return (<><div className="textbox-container">
        {wordList.map(item => {
            return <span className={item.status}>{item.letter}</span>
        })}
    </div>
    <input autoFocus type="text" value="" onChange={e => onInput(e.target.value, onCharacter)} />
    </>)
}

Textbox.propTypes = {
    onInput: PropTypes.func,
    onCharacter: PropTypes.func,
    wordList: PropTypes.array,
}

export default Textbox;