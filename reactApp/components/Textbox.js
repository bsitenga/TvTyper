import React from 'react';
import PropTypes from 'prop-types';

const Textbox = ({onInput, onCharacter}) => {
    return (<><div className="textbox-container">
        Quotes to fill in
    </div>
    <input type="text" value="" onChange={e => onInput(e.target.value, onCharacter)} />
    </>)
}

Textbox.propTypes = {
    onInput: PropTypes.func,
    onCharacter: PropTypes.func
}

export default Textbox;