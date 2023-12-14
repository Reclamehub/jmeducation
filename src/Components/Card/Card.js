import React from 'react'
import "./Card.css"

const Cards = (props) => {
  return (
    <div className="card" 
    style={{
      backgroundImage: `url('../.png')`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition:"cover",
      opacity:".8"
 }}>
    <img src={props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-heading">{props.heading}</p>
      <p className="card-text">{props.text}</p>
      </div>
  </div>

  )
}

export default Cards