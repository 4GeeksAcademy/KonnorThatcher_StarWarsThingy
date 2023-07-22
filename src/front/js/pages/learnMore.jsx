import React from 'react'
import { useParams } from 'react-router-dom'

const LearnMore = () => {
    const {id} = useParams()

    const imgStyle = {
        width: "90%",
        aspectRatio: "3/2",
    }
    console.log(id)
    return (
      <>
        <div className='row p-5'>
            <div className="col-6 d-flex">
                <img className='ms-auto' src="https://placehold.co/600x400" style={imgStyle}></img>
            </div>
            <div className="col-6">
                <h2>{id}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div></div>
      </>
    )
}

export default LearnMore