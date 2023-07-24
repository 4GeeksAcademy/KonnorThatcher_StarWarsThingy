import React from 'react'

const PlaceholderCard = () => {
  return (
    <div className="card me-5 flex-shrink-0" style={{width: "18rem"}}>
        <img src='https://placehold.co/600x400' className='card-img-top'/>
        <div className="card-body">
            <h5 className="card-title placeholder-glow">
                <span className="placeholder col-7"></span>
            </h5>
            <p className="card-text placeholder-glow">
                <span className='placeholder col-5 me-1'></span>
                <span className='placeholder col-4'></span>
                <span className='placeholder col-3 me-1'></span>
                <span className='placeholder col-7'></span>
            </p>
            <button className="btn btn-info disabled placeholder mt-1 col-5"></button>
        </div>
    </div>
  )
}

export default PlaceholderCard