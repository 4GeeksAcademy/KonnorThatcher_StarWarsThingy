import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CharacterPage = () => {
    const {charID} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {getPerson()}, [])

    const url = `https://swapi.dev/api/people/${charID}/`

    const getPerson = () => {
        fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(person => setCharacter(person))
    }

    const imgStyle = {
        width: "90%",
        aspectRatio: "3/2",
    }
    
    const cmToFt = (height) => {
        let inches = height * 0.39
        let feet = Math.floor(inches/12)
        let remainder = Math.floor(inches) - (feet * 12)
        return `${feet}'${remainder}`
    }

    console.log(character)

    return (
        <div className='row p-5'>
            <div className="col-6 d-flex">
                <img className='ms-auto' src="https://placehold.co/600x400" style={imgStyle}></img>
            </div>
            <div className="col-6">
                <h2>{character.name}</h2>
                <ul>
                    <li>Gender: {character.gender}</li>
                    <li>Birth Year: {character.birth_year}</li>
                    <li>Height: {cmToFt(character.height)}</li>
                    <li>Hair Color: {character.hair_color}</li>
                    <li>Eye Color: {character.eye_color}</li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterPage