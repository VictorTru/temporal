import React from 'react'
import icono from '../images/icono-white.png'
import {Link} from 'react-router-dom'
import { useAuth } from "../context/AuthContext";


const Header = () => {
  const auth = useAuth();
  const { user, displayName } = auth;

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <>
    <header aria-label="Site Header" className="bg-color-secundario-1">
  <div className="mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-24 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12 ">
        <a className="block text-white flex items-center " href="/">
          <img
        src={icono}
        className="h-24 mr-3"
        alt="icono"
      />
      
      
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-12 text-base font-bold">
            <li>
              <Link
                className="text-white transition hover:text-gray-500/75 "
                to="/biologico"
              >
                Bio
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-gray-500/75"
                to="/psicologico"
              >
                Psico
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-gray-500/75"
               to="/espiritual"
              >
                Espiritual
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-gray-500/75"
                to="/preguntas"
              >
                Faq
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-white-500/75"
                to="/precio"
              >
                Precio
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-gray-500/75"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>


      
      <div className="flex items-center gap-4 ">
          

      {user ? (
              // Si el usuario está logueado, mostrar un saludo y el botón de cerrar sesión
              <div className="flex items-center gap-4">
                <p className="text-white">{displayName && <h5>Bienvenido : {displayName}</h5>}</p>
                <button
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              // Si el usuario no está logueado, mostrar los botones de Iniciar Sesión y Registrarse
              <div className="flex items-center gap-4 ">
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Iniciar Sesión
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      to="/registrarse"
                    >
                      Registrarse
                    </Link>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header