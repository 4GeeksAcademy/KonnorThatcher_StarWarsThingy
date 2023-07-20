import React from 'react'
import { Link } from "react-router-dom";


const PlanetCard = ({imgURL = "https://placehold.co/600x400", name = "Mars 2", population = 0, terrain = "n/a"}) => {
  return (
    <div className="card me-5 flex-shrink-0" style={{ width: "18rem" }}>
      <img src={imgURL} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-1">Population: {population}</p>
        <p className="card-text mb-1">Terrain: {terrain}</p>
        <div className='d-flex justify-content-between mt-3'>
            <Link to="/demo">
                <button className='btn btn-info'>Learn More!</button>
            </Link>
            <button className="btn btn-outline-danger">
                <i className="fa-regular fa-heart"></i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default PlanetCard