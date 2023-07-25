import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CharacterCard from '../component/characterCard.jsx'
import PlanetCard from '../component/planetCard.jsx'
import PlaceholderCard from "../component/placeholderCard.jsx";
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

	const idFromURL = (url) => {
		return url.match(/[0-9]/g);
	}

	return (
		<div className="mt-5">
    		<div className='mx-5'>
    		    <h2 className='text-danger'>Characters</h2>
    		    <div className='d-flex overflow-x-auto p-2'>
    		        {people.length === 0 ? (<PlaceholderCard />) : people.map((person, idx) => {
						let id = person.url.match(/[0-9]/g).join('')
						return (
							<CharacterCard 
								imgURL={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
								key={idx} 
								name={person.name} 
								hairColor={person.hair_color} 
								eyeColor={person.eye_color} 
								id={id}
							/>
						)
					})}
    		    </div>
    		</div>
    		<div className='m-5'>
    		    <h2 className='text-danger'>Planets</h2>
    		    <div className="d-flex overflow-x-auto p-2">
    		        {planets.length === 0 ? (<PlaceholderCard />) : planets.map((planet, idx) => {
						let id = planet.url.match(/[0-9]/g).join('')
						return (
							<PlanetCard 
								imgURL={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
								key={idx} 
								name={planet.name} 
								population={planet.population} 
								terrain={planet.terrain}
								id={id}
							/>
						)
					})}
    		    </div>
    		</div>
		</div>
	);
};
