import React from "react";

const Precio = () => {
  return (
    <>
      <section className="bg-csecundario py-12">
        <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
          <h2 className="text-3xl font-bold text-center  text-white">
            Nuestros Precios
          </h2>
          <div>
            <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 rounded-xl">
              <div className="relative flex flex-col p-8 bg-white rounded-2xl">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-600">
                    Precio Basico
                  </h3>
                  <p className="flex items-baseline mt-4 text-neutral-600">
                    <span className="text-5xl font-extrabold tracking-tight">
                      S/.80
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </p>
                  <p className="mt-6 mb-10 text-gray-500">
                    4 sesiones de coaching virtual de 60 minutos.(Psicológico)
                  </p>
                  {/* Feature list */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-neutral-600">
                      ¿Qué está incluido?
                    </span>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Acceso a herramientas
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Recursos para el autoconocimiento
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Desarrollo personal
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Soporte por correo electrónico <br /> posterior a la
                        sesión
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg">
                  <a
                    href="#"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
              <div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    Plan Profesional
                  </h3>
                  <p className="flex items-baseline mt-4 text-white">
                    <span className="text-5xl font-extrabold tracking-tight">
                      S/.140
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </p>
                  <p className="mt-6 text-white text-solitud">
                    8 sesiones de coaching virtual de 60 minutos.(Psicológico,
                    Espiritual)
                  </p>
                  {/* Feature list */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-white">
                      ¿Qué está incluido?
                    </span>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        Acceso a herramientas
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        Recursos para el autoconocimiento
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        Desarrollo personal (1 hora de session)
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        Soporte por correo electrónico <br /> posterior a la
                        sesión
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-white">
                        Sessiones y eventos gratuitos
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="z-50 mt-6 rounded-lg">
                  <a
                    href="/pricing"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
                  >
                    {" "}
                    Get started{" "}
                  </a>
                </div>
              </div>
              <div className="relative flex flex-col p-8 bg-white rounded-2xl">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-600">
                    Plan Master
                  </h3>
                  <p className="flex items-baseline mt-4 text-neutral-600">
                    <span className="text-5xl font-extrabold tracking-tight">
                      S/.200
                    </span>
                    <span className="ml-1 text-xl font-semibold">/mes</span>
                  </p>
                  <p className="mt-6 text-gray-500">
                    10 sesiones de coaching virtual de 60 minutos.(Psicológico,
                    Espiritual y Biologico)
                  </p>
                  {/* Feature list */}
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-neutral-600">
                      ¿Qué está incluido?
                    </span>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Acceso herramientas
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Recursos para el <br /> autococimiento
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Desarrollo personal
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Desarrollo personal (2 hora de session)
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Soporte por correo electrónico <br /> posterior a la
                        sesión
                      </span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg
                          className="flex-shrink-0 w-4 h-4 mx-auto text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">
                        Eventos Exclusivos
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg">
                  <a
                    href="#"
                    type="highlight"
                    className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
                  >
                    {" "}
                    Get Started{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Precio;
