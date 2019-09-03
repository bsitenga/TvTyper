import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const ProgressBar = ({ progress }) => {
	return (
		<div className = "outer-progress-bar">
			<div className="inner-progress-bar" style={{width: `${progress * 100}%`}}>
                
			</div>
		</div>
	);
};

export default ProgressBar;