import React from "react";
import Psicologico from "./Psicologico";
import { psicologicosApi } from "../apis/psicologicosApi.js";

const Psicologicos = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-black title-font mb-4 text-color-principal tracking-widest">
              EQUIPO PSICOLOGICO
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "Encuentra apoyo y crecimiento emocional desde la comodidad de tu hogar con nuestras sesiones virtuales de psicología, guiadas por expertos en el campo."

            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {psicologicosApi.map((art, i) => art && <Psicologico prod={art} key={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psicologicos;
