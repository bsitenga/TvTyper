import React from 'react';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home-container">
				<div>
                    <button>Choose a show</button>
					<button>Enter a random race</button>
					<button>Create a room</button>
					<button>Register to track stats</button>
					<button>Login</button>
                </div>
			</div>
		</div>
	);
};

export default Home;
