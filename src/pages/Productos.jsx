import React from 'react'
import Producto from './Producto'
import {futurama} from "./futurama.js"

const Productos = () => {

  return (
    <div >
      


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
        OUR TEAM
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably havent
        heard of them.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
    {futurama.map((art,i) => (
         
         art &&	<Producto prod={art} key={i} />
     ))}
     
    </div>
  </div>
</section>


    </div>
  )
}

export default Productos;