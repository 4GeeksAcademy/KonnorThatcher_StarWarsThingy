import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Characters from "./characters.jsx";
import Planets from "./planets.jsx";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5">
			<Characters />
			<Planets />
		</div>
	);
};
