import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Practice from './components/Practice';
import Race from './components/Race';
import About from './components/About';

const routing = (<Router>
    <div>
        <Route path = "/" exact component={Home}/>
        <Route path = "/practice" exact component={Practice}/>
        <Route path = "/race" exact component={Race}/>
        <Route path = "/about" exact component={About}/>
    </div>
</Router>)

ReactDOM.render(routing,
    document.getElementById('root'));
    