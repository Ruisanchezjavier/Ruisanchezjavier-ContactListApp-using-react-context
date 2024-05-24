import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><h1>Contact List</h1></span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-primary"><h2>Add Contact</h2></button>
				</Link>
			</div>
		</nav>
	);
};
