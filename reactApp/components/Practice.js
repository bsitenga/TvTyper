import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';

const Practice = () => {
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

export default Practice;
