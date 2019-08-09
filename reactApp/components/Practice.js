import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Practice = ({wordList, onCharacter}) => {
	return (
		<div>
			<Navbar />
			<div className="practice-container">
				<h1>Practice</h1>
				<div className="show-list">List of shows to be implemented later.</div>
				<div className="practice-tab">
					<Textbox onInput={onInput} onCharacter={onCharacter}/>
				</div>
				{console.log(wordList)}
			</div>
		</div>
	);
};

const onInput = (input, onCharacter) => {
	if (input === ' ') {

	} else {
		onCharacter(input);
		console.log(input);
	}
}

Practice.propTypes = {
	wordList: PropTypes.array,
	onCharacter: PropTypes.func
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
		})
	};
};

//export default Practice;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
