import React, { useState, useEffect } from "react";
import { Card, Button } from "flowbite-react";
import MyModal from "./Modal";
import ModalContracto from "./ModalContracto";

const Producto = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContractoOpen, setIsModalContractoOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalContracto = () => {
    setIsModalContractoOpen(true);
  };

  const handleCloseModalContracto = () => {
    setIsModalContractoOpen(false);
  };


  return (
    <>{
      <div className="bg-white rounded-lg shadow-2xl w-full lg:w-1/2 md:flex py-2">
      <img
        src={props.prod.image}
        className="md:w-1/3 rounded-t-lg md:rounded-t-none md:rounded-l-lg object-cover"
      />
      <div className="p-6 min-h-full flex flex-col">
        <h2 className="flex-none font-bold text-2xl md:text-xl text-gray-800 hover:text-gray-700 mb-2">
          <a href="">{props.prod.name}</a>
        </h2>
        <p className="flex-none text-gray-600 mb-2">
          {" "}
          {props.prod.description}
        </p>
        <p className="flex-none text-gray-600 mb-2">
          {" "}
          {props.prod.nacionalidad}
        </p>
        <div className="mt-5 h-full flex flex-col justify-end items-end ">
          <div className="flex gap-2">
          <Button onClick={handleOpenModal}>Ver más</Button>
          <MyModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            EquipoDni={props.prod.dni}
            EquipoName={props.prod.name}
            EquipoProfesion={props.prod.profesion}
            EquipoDescripcion={props.prod.description}
            EquipoTrabajo={props.prod.modelo_trabajo}
            EquipoRate={props.prod.rating.rate}
          >
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {props.prod.description}
            </p>
          </MyModal>


          <Button onClick={handleOpenModalContracto}>Contractar</Button>
          <ModalContracto
            isOpen={isModalContractoOpen}
            onClose={handleCloseModalContracto}
            
          >
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             
            </p>
          </ModalContracto>
          </div>
        </div>
      </div>
    </div>

    }
            
    </>
  )
};

export default Producto;
