import React, { useState } from "react";
import imagenRegistrarse from '../images/registrarse.png'
import { useAuth } from "../context/AuthContext" 


const Registrarse = () => {
  const auth = useAuth()
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister)
  }

  return (
    <>

<section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-3xl">
                        Registrarse
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Correo electrónico
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Correo electrónico"
                      onChange={(e) => setEmailRegister(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Contraseña
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Contraseña"
                      onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                    onClick={(e) => handleRegister(e)}
                      type="button"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Registrarse
                    </button>
                   
                  </div>
                </div>
              </div>
              <div className="order-first hidden w-full lg:block">
                <img
                  className="object-cover h-full bg-cover rounded-l-lg"
                  src={imagenRegistrarse}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Registrarse;
