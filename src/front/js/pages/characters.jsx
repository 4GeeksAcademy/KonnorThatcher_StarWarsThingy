import React from 'react'
import CharacterCard from '../component/characterCard.jsx'

const Characters = () => {
  return (
    <div className='mx-5'>
        <h2>Characters</h2>
        <div className='d-flex overflow-x-scroll p-2'>
            <CharacterCard />
            <CharacterCard name="Bo Biggy"/>
            <CharacterCard hairColor='Grey' />
            <CharacterCard />
        </div>
    </div>
  )
}

export default Characters