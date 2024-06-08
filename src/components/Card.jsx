import React from 'react'
import '../styles/CardStyle.css'
import { Link } from 'react-router-dom';

function Card({auto}) {
    const {modelo,año,precio,imagen} = auto;
  return (
    <div className='card'>
        <div className='contenedorImagen'>
            <img src={imagen} alt="imagen de auto" />
        </div>
        <h2>{modelo} </h2>
        <p>{año} </p>
        <span>${precio} </span>
        <button>
          <Link to={'registro'} className='linkCard'>
            Rentar
          </Link>
        </button>
    </div>
  )
}

export default Card