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
					<h1>Practice</h1>
					<p>
						practice{' '}
						<div className="dropdown" style={{ display: 'inline' }}>
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ background: 'none', color: '#000', border: 'none' }}
							>
								all
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setWordList.bind(this, 'Frasier')}
								>
									short
								</a>
								<a
									className="dropdown-item"
									href="#"
									onClick={this.props.setWordList.bind(this, 'Seinfeld')}
								>
									average
								</a>
								<a className="dropdown-item" href="#">
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
								style={{ background: 'none', color: '#000', border: 'none' }}
							>
								any show
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</p>
					<p>Start typing to begin practice</p>
					<div className="show-list">List of shows to be implemented later.</div>
					<div className="practice-tab">
						<p>WPM: {this.props.WPM}</p>
						<p>Time: {this.props.gameTimer}</p>
						<ProgressBar progress={this.props.progress} />
						<Textbox
							wordList={this.props.wordList}
							onInput={this.onInput.bind(this)}
							onKeyDown={this.onKeyDown.bind(this)}
						/>
					</div>
					{this.props.gameStatus === 'end' && (
						<button
							onClick={this.props.startNew.bind(this)}
						>
							Try another
						</button>
					)}
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
	onCharacter: PropTypes.func,
	onBackspace: PropTypes.func,
	setStatus: PropTypes.func,
	increaseTimer: PropTypes.func,
	setWordList: PropTypes.func,
	startNew: PropTypes.func,
};

const mapStateToProps = (state) => {
	return {
		wordList: state.fullGame.wordList,
		WPM: state.fullGame.WPM,
		gameTimer: state.fullGame.gameTimer,
		gameStarter: state.fullGame.gameStarter,
		gameStatus: state.fullGame.gameStatus,
		currIndex: state.fullGame.currIndex,
		progress: state.fullGame.progress
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
		startNew: () => {
			dispatch({
				type: 'NEWPRACTICE'
			})
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Practice));
