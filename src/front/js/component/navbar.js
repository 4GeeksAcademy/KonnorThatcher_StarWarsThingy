import React from "react";
import { Link } from "react-router-dom";
import FavoritesDropdown from "./favoritesDropdown.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<i className="fa-solid fa-jedi fa-2xl"></i>
					</span>
				</Link>
				<div className="ml-auto">
					<FavoritesDropdown />
				</div>
			</div>
		</nav>
	);
};
