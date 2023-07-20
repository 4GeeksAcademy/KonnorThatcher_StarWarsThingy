import React from 'react'
import PlanetCard from '../component/planetCard.jsx'

const Planets = () => {
  return (
    <div className='m-5'>
        <h2 className='text-danger'>Planets</h2>
        <div className="d-flex overflow-x-auto p-2">
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
            <PlanetCard />
        </div>
    </div>
  )
}

export default Planets