import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Practice = ({wordList}) => {
	return (
		<div>
			<Navbar />
			<div className="practice-container">
				<h1>Practice</h1>
				<div className="show-list">List of shows to be implemented later.</div>
				<div className="practice-tab">
					<Textbox />
					<input type="text" />
				</div>
			</div>
		</div>
	);
};

Practice.PropTypes = {
	wordList: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        wordList: state.fullGame.wordList,
    };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

//export default Practice;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
