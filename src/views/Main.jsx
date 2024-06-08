import React, { useContext } from 'react'
import '../styles/MainStyle.css'
import Card from '../components/Card'
import MenuBar from './MenuBar'
import autoI from '../assets/model-3.avif'
import { contexto } from '../context/ContextoGeneral'

function Main() {
  const {listaAutos} = useContext(contexto);
  function renderAutos(){
    return listaAutos.map((auto,i)=>{
      return <Card auto={auto} key={i}/>
    })
  }
  return (
    <main className='main'>
      <MenuBar/>
        {renderAutos()}
    </main>
  )
}

export default Main