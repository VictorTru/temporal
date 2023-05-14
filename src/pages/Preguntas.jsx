import React from 'react'
import imagePregunta from '../images/pregunta.png'

const Preguntas = () => {
  return (
   
  <div className="container my-18 px-6 mx-auto max-w-screen-xl ">
    {/* Section: Design Block */}
    <section className="text-gray-800 ">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
        <div className="my-auto md:mb-0 py-12 px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">
            Preguntas frecuentes
          </h2>
          <p className="font-bold mb-4">
            ¿Cómo funciona la página?
          </p>
          <p className="text-gray-500 mb-12">
            Es una plataforma en la cual se va ayudar a las personas a encontrar su profesional ideal para el ámbito del cuerpo, mente y alma.
          </p>
          <p className="font-bold mb-4">
            ¿Cómo agendo una cita?
          </p>
          <p className="text-gray-500 mb-12">
            Seleccionando en la pestaña de categoría se va a poder visualizar la lista con los profesionales, además de su horario en el cual seleccionando la hora indicada se podrá reservar la cita. Para reservar una cita es necesario haberse registrado previamente. Una vez confirmado esto se procederá al pago.
          </p>
          <p className="font-bold mb-4">
            ¿Cuánto tiempo dura una cita?
          </p>
          <p className="text-gray-500 mb-12">
            La duración estándar por cita es de 60 minutos.
          </p>
        </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-11/12 overflow-hidden">
          <img
            src={imagePregunta}
            className="w-full"
            alt="Phone image"
          />
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>


  )
}

export default Preguntas