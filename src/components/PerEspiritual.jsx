import React from 'react'
import Espiritual from '../pages/Espiritual'
import PerfilEspiritual from './PerfilEspiritual'

const PerEspiritual = () => {
  return (
    <>    
    {Espiritual.map((art,i) => (
    <PerfilEspiritual art={art} key={i}/>
    ))}
    
</>
  )
}

export default PerEspiritual