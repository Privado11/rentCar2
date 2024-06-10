import React, { useContext } from 'react'
import '../styles/RentaStyle.css'
import { contexto } from '../context/ContextoGeneral'

function Renta() {
    const {rentaActual,filtroActual} = useContext(contexto);
    function modificarFecha(fecha){
        const newFecha = fecha.split('T')
        return newFecha[0]
    }
  return (
    <div className='containerView'>
        <div className='containerRenta'>
            <h2>Auto Rentado</h2>
            <h3>Propietario</h3>
            <label>Nombre:</label>
            <p>
                {rentaActual.name+' '+rentaActual.lastName}
            </p>   
            <label>Dirección:</label>
            <p>
                {rentaActual.address}
            </p>  
            <label>Telefono:</label>
            <p>
                {rentaActual.phone}
            </p> 
            <label>Ciudad:</label>
            <p>
                {rentaActual.city.name}
            </p> 
            <h3>Auto</h3>
            <label>Modelo:</label>
            <p>
                {rentaActual.model}
            </p>   
            <label>Precio:</label>
            <p>
                {rentaActual.price}
            </p>  
            <label>Año:</label>
            <p>
                {rentaActual.year}
            </p>
            <label>Placa:</label>
            <p>
                {rentaActual.licensePlate}
            </p>     
            <h3>Fecha de Renta</h3>
            <label>Fecha Inicial:</label>
            <p>
                {modificarFecha(filtroActual.fechaI)}
            </p>
            <label>Fecha Final:</label>
            <p>
                {modificarFecha(filtroActual.fechaF)}
            </p>
        </div>
    </div>
  )
}

export default Renta