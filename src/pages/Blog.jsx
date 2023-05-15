import React from "react";

const Blog = () => {
  return (
    <div className="bg-white">
      <h2 className="text-3xl font-bold text-center py-12 text-black ">Blog</h2>

      {/* Container for demo purpose */}
      <div className="container my-4 px-6 mx-auto flex flex-wrap ">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 w-2/4 p-4">
          <img
            src="https://mdbootstrap.com/img/new/slides/198.jpg"
            className=" shadow-lg rounded-lg mb-6"
            alt=""
          />
          <div className=" flex items-center mb-6 ">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
              className="rounded-full mr-2 h-8 "
              alt=""
              loading="lazy"
            />
            <div>
              <span>
                {" "}
                Published <u>15.07.2020</u> by{" "}
              </span>
              <a href="#!" className="font-medium">
                Anna Maria Doe
              </a>
            </div>
          </div>
          <h1 className="font-bold text-3xl mb-6">
            Bienestar Integral: Cómo un Coach Psicológico, Espiritual y
            Biológico puede ayudarte a transformar tu vida
          </h1>
          <p>
            En la sociedad actual, es común que nos enfoquemos en el aspecto
            físico de nuestra salud, descuidando nuestra salud mental y
            emocional. Sin embargo, cada vez es más importante darnos cuenta de
            la interconexión entre todos estos aspectos de nuestro bienestar y
            buscar soluciones integrales. Es aquí donde entra en juego el
            coaching psicológico, espiritual y biológico. En nuestra página,
            contamos con un equipo de profesionales dedicados a guiar a personas
            en su camino hacia la transformación personal y el bienestar
            integral.
          </p>
        </section>
        {/* Section: Design Block */}

        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 w-2/4 p-4">
          <img
            src="https://mdbootstrap.com/img/new/slides/198.jpg"
            className="w-full shadow-lg rounded-lg mb-6"
            alt=""
          />
          <div className="flex items-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
              className="rounded-full mr-2 h-8"
              alt=""
              loading="lazy"
            />
            <div>
              <span>
                {" "}
                Published <u>15.07.2020</u> by{" "}
              </span>
              <a href="#!" className="font-medium">
                Anna Maria Doe
              </a>
            </div>
          </div>
          <h1 className="font-bold text-3xl mb-6">
            Encuentra tu equilibrio emocional con la ayuda de nuestros coaches
            psicológicos, espirituales y biológicos
          </h1>
          <p>
            La vida moderna nos ha llevado a experimentar altos niveles de
            estrés y ansiedad, afectando nuestra salud emocional y bienestar en
            general. En nuestra página, contamos con un equipo de coaches
            psicológicos, espirituales y biológicos dedicados a ayudarte a
            encontrar el equilibrio emocional que necesitas para vivir una vida
            plena y feliz. Nuestros profesionales utilizan un enfoque integrador
            y holístico, lo que significa que consideran todos los aspectos de
            tu vida en su práctica. Desde la psicología hasta la espiritualidad
            y la biología, nuestros coaches te ayudarán a descubrir patrones y
            comportamientos que podrían estar afectando tu bienestar emocional.
          </p>
          
        </section>

        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800 w-2/4 p-4">
          <img
            src="https://mdbootstrap.com/img/new/slides/198.jpg"
            className="w-full shadow-lg rounded-lg mb-6"
            alt=""
          />
          <div className="flex items-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
              className="rounded-full mr-2 h-8"
              alt=""
              loading="lazy"
            />
            <div>
              <span>
                {" "}
                Published <u>15.07.2020</u> by{" "}
              </span>
              <a href="#!" className="font-medium">
                Anna Maria Doe
              </a>
            </div>
          </div>
          <h1 className="font-bold text-3xl mb-6">
            El camino hacia la transformación personal: Cómo nuestro equipo de
            coaches puede ayudarte a alcanzar tus metas
          </h1>
          <p>
            ¿Te sientes estancado en tu vida personal o profesional? ¿Quieres
            alcanzar tus metas pero no sabes por dónde empezar? En nuestra
            página, contamos con un equipo de coaches psicológicos, espirituales
            y biológicos dedicados a ayudarte a encontrar el camino hacia la
            transformación personal que estás buscando. Nuestros profesionales
            te guiarán en un viaje de autodescubrimiento y transformación, donde
            aprenderás a identificar tus fortalezas, debilidades y oportunidades
            de crecimiento. A través de sesiones personalizadas, te ayudaremos a
            establecer metas alcanzables y crear un plan de acción para
            alcanzarlas.
          </p>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </div>
  );
};

export default Blog;
