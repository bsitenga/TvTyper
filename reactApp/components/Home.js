import React from 'react';
import Textbox from './Textbox';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home-container">
				<div>
                    This is the home.
                </div>
			</div>
		</div>
	);
};

export default Home;
