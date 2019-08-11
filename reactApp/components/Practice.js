import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'babel-polyfill';

class Practice extends React.Component {
	componentDidMount() {
		this.callBackendAPI().catch(e => {console.log(e)});
	}

	onInput(input) {
		console.log(this.props.gameStatus);
		if (this.props.gameStatus === 'during') {
			this.props.onCharacter(input);
		} else if (this.props.gameStatus === 'before') {
			this.props.setStatus('during');
			const timer = setInterval(() => {
				if (this.props.gameStatus === 'end') {
					clearInterval(timer);
				}
				this.props.increaseTimer();
			}, 1000);
			this.props.onCharacter(input);
		}
	}

	onKeyDown(e) {
		if (e.keyCode === 8) {
			this.props.onBackspace();
		}
	}

	async callBackendAPI() {
		const response = await fetch('http://localhost:5000/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}

		console.log(body);
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="practice-container">
					<h1>Practice</h1>
					<p>Start typing to begin practice</p>
					<div className="show-list">List of shows to be implemented later.</div>
					<div className="practice-tab">
						<p>WPM: {this.props.WPM}</p>
						<p>Time: {this.props.gameTimer}</p>
						<Textbox
							wordList={this.props.wordList}
							onInput={this.onInput.bind(this)}
							onKeyDown={this.onKeyDown.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}

Practice.propTypes = {
	wordList: PropTypes.array,
	WPM: PropTypes.number,
	gameTimer: PropTypes.number,
	gameStarter: PropTypes.number,
	gameStatus: PropTypes.string,
	onCharacter: PropTypes.func,
	onBackspace: PropTypes.func,
	setStatus: PropTypes.func,
	increaseTimer: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		wordList: state.fullGame.wordList,
		WPM: state.fullGame.WPM,
		gameTimer: state.fullGame.gameTimer,
		gameStarter: state.fullGame.gameStarter,
		gameStatus: state.fullGame.gameStatus
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCharacter: (letter) =>
			dispatch({
				type: 'LETTER_ADDED',
				letter: letter
			}),
		onBackspace: (letter) =>
			dispatch({
				type: 'BACKSPACE',
				letter: letter
			}),
		setStatus: (status) =>
			dispatch({
				type: 'STATUS',
				status: status
			}),
		increaseTimer: () => {
			dispatch({
				type: 'INCREASE'
			});
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
