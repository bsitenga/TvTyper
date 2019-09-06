import React from 'react';

const ProgressBar = ({ progress }) => {
	return (
		<div className = "outer-progress-bar" style = {{margin: "15px auto"}}>
			<div className="inner-progress-bar" style={{width: `${progress * 100}%`}}>
                
			</div>
		</div>
	);
};

export default ProgressBar;