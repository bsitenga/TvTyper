import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Practice = ({wordList, onCharacter, onBackspace}) => {
	return (
		<div>
			<Navbar />
			<div className="practice-container">
				<h1>Practice</h1>
				<div className="show-list">List of shows to be implemented later.</div>
				<div className="practice-tab">
					<Textbox wordList={wordList} onInput={onInput} onCharacter={onCharacter} onKeyDown={onKeyDown} onBackspace={onBackspace}/>
				</div>
			</div>
		</div>
	);
};

const onInput = (input, onCharacter) => {
		onCharacter(input);
}

const onKeyDown = (e, onBackspace) => {
	if (e.keyCode === 8) {
		onBackspace();
	}
}

Practice.propTypes = {
	wordList: PropTypes.array,
	onCharacter: PropTypes.func,
	onBackspace: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        wordList: state.fullGame.wordList,
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCharacter: (letter) => dispatch({
			type: 'LETTER_ADDED',
			letter: letter
		}),
		onBackspace: (letter) => dispatch({
			type: 'BACKSPACE',
			letter: letter
		}),
	};
};

//export default Practice;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
