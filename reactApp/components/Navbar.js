import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div className="topnav">
				<Link to="/" className="brand">
					<strong>Tv</strong>Typer
				</Link>
				<Link to="/" className="active">
					Home
				</Link>
				<Link to="/practice">Practice</Link>
				<Link to="/race">Race</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
};

export default Navbar;
