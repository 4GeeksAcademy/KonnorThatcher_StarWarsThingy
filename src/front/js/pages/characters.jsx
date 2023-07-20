import React from 'react'
import CharacterCard from '../component/characterCard.jsx'

const Characters = () => {
  return (
    <div className='mx-5'>
        <h2 className='text-danger'>Characters</h2>
        <div className='d-flex overflow-x-auto p-2'>
            <CharacterCard />
            <CharacterCard name="Bo Biggy"/>
            <CharacterCard hairColor='Grey' />
            <CharacterCard />
        </div>
    </div>
  )
}

export default Characters