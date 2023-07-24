import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlanetPage = () => {
    const {planetID} = useParams()
    const [planet, setPlanet] = useState({})

    useEffect(() => {getPlanet()}, [])

    const url = `https://swapi.dev/api/planets/${planetID}/`

    const getPlanet = () => {
        fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(planet => setPlanet(planet))
    }

    const imgStyle = {
        width: "90%",
        aspectRatio: "3/2",
    }

    return (
      <div className='row p-5'>
            <div className="col-6 d-flex">
                <img className='ms-auto' src="https://placehold.co/600x400" style={imgStyle}></img>
            </div>
            <div className="col-6">
                <h2>{planet.name}</h2>
                <ul>
                    <li>
                        <b>Population:</b> {planet.population}
                    </li>
                    <li>
                        <b>Terrain:</b> {planet.terrain}
                    </li>
                    <li>
                        <b>Climate:</b> {planet.climate}
                    </li>
                    <li>
                        <b>Hours in a Day:</b> {planet.rotation_period} hours
                    </li>
                    <li>
                        <b>Days in a Year:</b> {planet.orbital_period} days
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PlanetPage