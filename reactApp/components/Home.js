import React from 'react'
import Textbox from './Textbox';

const Home = () => {
    return (<div className = "home-container">
        <div className = "left-tab">
            <h1>Pick your show</h1>
        </div>
        <div className = "mid-circle">
            <input type="text" placeholder="Filter..."></input>
        </div>
        <div className = "right-tab">
            <h1>TV Typeracer</h1>
            <Textbox />
            <input type="text"></input>
        </div>
    </div>);
}

export default Home;