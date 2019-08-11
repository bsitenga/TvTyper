import React from 'react';
import Navbar from './Navbar';

const About = () => {
	return (
		<div>
			<Navbar />
			<div className="about-container">
				<h1>About TvTyper</h1>
				<p>
					TvTyper was created to provide users with a fun way to relive the best moments from their favorite
					shows while also improving their typing skills. Logging in before you race alone or with friends
					allows you to keep track of your statistics. WPM is calculated in a way that ensures passages with
					short words have no advantage over passages with longer words.
				</p>
				<p>
					This project was built using React/Redux on the frontend, and Node/Express on the backend. For more
					details about the specific technologies I used, please contact me directly.
				</p>
				<div className="about-me-card">
					<img
						src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/67808726_2141216039321928_4038437175811899392_n.jpg?_nc_cat=100&_nc_oc=AQmHT_OdZ3M6pfeFGSKGI2YM7uN8HTo6ClT7KJ6ikxSb0QOf-kfxGbdQlg0B-9IMQgw&_nc_ht=scontent-ort2-1.xx&oh=55e0bec7d485709ec38f48bbb5455573&oe=5DE84278"
						style={{ height: '250px', borderRadius: '175px' }}
					/>
					<h2>Brian Sitenga</h2>
					<hr />
					<p>
						I'm a fullstack developer based in the Greater Los Angeles area. Click on the links below to
						contact me or see my other projects.
					</p>
					<button className="i-button">
						<i className="fab fa-linkedin" />
					</button>
					<button className="i-button">
						<i className="fab fa-github-square" />
					</button>
					<button className="i-button">
						<i className="fas fa-envelope-square" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
