import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'babel-polyfill';

class Practice extends React.Component {
	componentDidMount() {
		this.callBackendAPI().catch((e) => {
			console.log(e);
		});
	}

	onInput(input) {
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

	getProgressWidth() {
		return this.props.currIndex / this.props.wordList.length;
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
					<div div className="practice-filter">
						Practice{' '}
						<div className="dropdown" style={{ display: 'inline' }}>
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{
									background: 'none',
									color: '#000',
									border: 'none',
									outline: 'none',
									fontSize: '1em',
									paddingBottom: '.5em'
								}}
							>
								{this.props.passageLength}
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setPassageLength.bind(this, 'all')}
								>
									all
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setPassageLength.bind(this, 'short')}
								>
									short
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setPassageLength.bind(this, 'average')}
								>
									average
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setPassageLength.bind(this, 'long')}
								>
									long
								</a>
							</div>
						</div>{' '}
						passages from{' '}
						<div className="dropdown" style={{ display: 'inline' }}>
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{
									background: 'none',
									color: '#000',
									border: 'none',
									outline: 'none',
									fontSize: '1em',
									paddingBottom: '.5em'
								}}
							>
								{this.props.passageShow}
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setWordList.bind(this, 'any show')}
								>
									any show
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setWordList.bind(this, 'Frasier')}
								>
									Frasier
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setWordList.bind(this, 'Seinfeld')}
								>
									Seinfeld
								</a>
							</div>
						</div>
					</div>
					<p style={{fontSize: "1.5em"}}>{(this.props.gameStatus === 'before') ? <p>Start typing to begin!</p>: <p>WPM: {this.props.WPM} Time: {this.props.gameTimer}</p>}</p>
					<div className="practice-tab">
						<p>Feeling competitive? <a href = "/race">Join a race.</a></p>
						<Textbox
							wordList={this.props.wordList}
							onInput={this.onInput.bind(this)}
							onKeyDown={this.onKeyDown.bind(this)}
						/>
					</div>
					{this.props.gameStatus === 'end' && (
						<button onClick={this.props.startNew.bind(this)}
						>Try another</button>
					)}
					<div style ={{marginTop: "50px"}}>
						<p><a href = "/login">Login</a> to see your stats.</p>
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
	currIndex: PropTypes.number,
	gameStatus: PropTypes.string,
	passageShow: PropTypes.string,
	passageLength: PropTypes.string,
	onCharacter: PropTypes.func,
	onBackspace: PropTypes.func,
	setStatus: PropTypes.func,
	increaseTimer: PropTypes.func,
	setWordList: PropTypes.func,
	startNew: PropTypes.func,
	setPassageLength: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		wordList: state.fullGame.wordList,
		WPM: state.fullGame.WPM,
		gameTimer: state.fullGame.gameTimer,
		gameStarter: state.fullGame.gameStarter,
		gameStatus: state.fullGame.gameStatus,
		currIndex: state.fullGame.currIndex,
		progress: state.fullGame.progress,
		passageShow: state.fullGame.passageShow,
		passageLength: state.fullGame.passageLength
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
		},
		setWordList: (tvShow) => {
			dispatch({
				type: 'NEWSHOW',
				tvShow: tvShow
			});
		},
		setPassageLength: (tvLength) => {
			dispatch({
				type: 'NEWLENGTH',
				tvLength: tvLength
			});
		},
		startNew: () => {
			dispatch({
				type: 'NEWPRACTICE'
			});
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
