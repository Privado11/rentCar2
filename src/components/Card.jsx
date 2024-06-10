import React, { useContext } from 'react'
import '../styles/CardStyle.css'
import { Link } from 'react-router-dom';
import { contexto } from '../context/ContextoGeneral';
import imgAuto from '../assets/model-3.avif'

function Card({auto}) {
    const {setAutoRentar} = useContext(contexto);
    const {model,year,price,city,id} = auto;

    function handleClick(){
      setAutoRentar(auto);
    }
    
  return (
    <div className='card'>
        <div className='contenedorImagen'>
            <img src={imgAuto} alt="imagen de auto" />
        </div>
        <h2>{model}</h2>
        <p>{year}</p>
        <span>{city.name}</span>
        <span key={1}>${price}</span>
        <button onClick={handleClick}>
          <Link to={'registro'} className='linkCard'>
            Rentar
          </Link>
        </button>
    </div>
  )
}

export default Card