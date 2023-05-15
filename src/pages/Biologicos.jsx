import React from "react";
import Biologico from "./Biologico";
import { biologicosApi } from "../apis/biologicosApi.js";

const Biologicos = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-black title-font mb-4 text-color-principal tracking-widest">
              EQUIPO BIOLOGICO
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            "Alcanza tu máximo potencial físico y nutricional con nuestras sesiones virtuales, donde nuestros expertos en nutrición te brindarán orientación personalizada y te ayudarán a lograr un estilo de vida saludable y equilibrado."
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {biologicosApi.map((art, i) => art && <Biologico prod={art} key={i} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biologicos;
