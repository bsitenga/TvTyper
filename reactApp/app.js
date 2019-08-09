import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Home from './components/Home';
import Practice from './components/Practice';
import Race from './components/Race';
import About from './components/About';

const store = createStore(rootReducer);

const routing = (
	<Provider store={store}>
		<Router>
			<Route path="/" exact component={Home} />
			<Route path="/practice" exact render={Practice} />
			<Route path="/race" exact component={Race} />
			<Route path="/about" exact component={About} />
		</Router>
	</Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
