import React from 'react';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home-container">
				<div
					style = {{fontSize: "2em", marginTop: "20px"}}
				>
					Test your typing. (put a typing react-typing-animation here) Race with friends.
				</div>
				<div>
					<div className = "home-card-container">
					<div className = "home-card">
						<div>Race</div>
						<div>img</div>
						<button>Join a Race</button>
						<button>Create a Room</button>
					</div>
					<div className = "home-card">
						<div>Practce</div>
						<div>img</div>
						<button>Classic</button>
						<button>All Games</button>
					</div>
					<div className = "home-card">
						<div>Statistics</div>
						<div>img</div>
						<button>All-Time Stats</button>
						<button>Your Stats</button>
					</div>
					<div className = "home-card">
						<div>Account</div>
						<div>img</div>
						<button>Register</button>
						<button>Login</button>
					</div>
					</div>
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
