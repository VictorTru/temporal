import React from "react";
import Espiritual from "./Espiritual";
import { espiritualsApi } from "../apis/espiritualsApi";
import { useState, useEffect } from 'react';

const Espirituals = () => {
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-black title-font mb-4 text-color-principal tracking-widest">
              EQUIPO ESPIRITUALES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "Explora tu camino espiritual y encuentra paz interior a través de nuestras sesiones virtuales con profesionales de la espiritualidad, listos para guiarte en tu viaje de autodescubrimiento y conexión espiritual."

            </p>
          </div>
          <div className="flex flex-wrap -m-4 ">
            {espiritualsApi.map((art, i) => art && <Espiritual prod={art} key={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Espirituals;
