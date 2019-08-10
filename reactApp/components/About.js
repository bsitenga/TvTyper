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
					shows while improving their typing skills. Make sure to log in before you race with your friends to
					keep track of your statistics.
				</p>
				<p>
					This project was built using React and Redux on the frontend. The backend was built using Node and
					Express. If you have any questions about my work, feel free to contact me.
				</p>
				<div className="about-me-card">
					<img
						src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/67808726_2141216039321928_4038437175811899392_n.jpg?_nc_cat=100&_nc_oc=AQmHT_OdZ3M6pfeFGSKGI2YM7uN8HTo6ClT7KJ6ikxSb0QOf-kfxGbdQlg0B-9IMQgw&_nc_ht=scontent-ort2-1.xx&oh=55e0bec7d485709ec38f48bbb5455573&oe=5DE84278"
						style={{ height: '250px', borderRadius: '175px' }}
					/>
					<h2>Brian Sitenga</h2>
					<p>I'm a fullstack developer based in the Greater Los Angeles area. Click on the links below to see my other work or contact me.</p>
					<button className="i-button"><i className="fab fa-linkedin"></i></button>
					<button className="i-button"><i className="fab fa-github-square"></i></button>
					<button className="i-button"><i className="fas fa-envelope-square"></i></button>
				</div>
			</div>
		</div>
	);
};

export default About;
