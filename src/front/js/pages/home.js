import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from '../component/characterCard.jsx'
import PlanetCard from '../component/planetCard.jsx'
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])

	useEffect(() => {
		getPeople();
		getPlanets();
	}, [])

	const getPeople = () => {
		fetch("https://swapi.dev/api/people/", {method: 'GET'})
		.then(result => result.json())
		.then(people => setPeople(people.results))
		
	}

	const getPlanets = () => {
		fetch("https://swapi.dev/api/planets/", {method: 'GET'})
		.then(result => result.json())
		.then(planets => setPlanets(planets.results))
		
	}

	return (
		<div className="mt-5">
    		<div className='mx-5'>
    		    <h2 className='text-danger'>Characters</h2>
    		    <div className='d-flex overflow-x-auto p-2'>
    		        {people.map((person, idx) => <CharacterCard key={idx} name={person.name} hairColor={person.hair_color} eyeColor={person.eye_color} id={person.name.split(' ').join('_')}/>)}
    		    </div>
    		</div>
    		<div className='m-5'>
    		    <h2 className='text-danger'>Planets</h2>
    		    <div className="d-flex overflow-x-auto p-2">
    		        {planets.map((planet, idx) => <PlanetCard key={idx} name={planet.name} population={planet.population} terrain={planet.terrain}/>)}
    		    </div>
    		</div>
		</div>
	);
};
