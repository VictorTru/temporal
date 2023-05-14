import React from "react";
import { Button, Modal } from "flowbite-react";

const MyModal = ({
  isOpen,
  onClose,
  children,
  EquipoDni,
  EquipoName,
  EquipoProfesion,
  EquipoDescripcion,
  EquipoTrabajo,
  EquipoRate,
}) => {
  const handleOpenModal = () => {
    console.log("abriendo modal");
  };

  const handleCloseModal = () => {
    console.log("cerrando modal");
    onClose();
  };

  return (
    <Modal show={isOpen} onClose={handleCloseModal}>
      <Modal.Header>
        <h2>Datos Personales</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-2">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
          
          <p className="font-bold mb-3 text-gray-700 uppercase">
            DNI: <span className="font-normal normal-case">{EquipoDni}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:{" "}
            <span className="font-normal normal-case">{EquipoName}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Profesion:{" "}
            <span className="font-normal normal-case">{EquipoProfesion}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Descripcion:{" "}
            <span className="font-normal normal-case">{EquipoDescripcion}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Modelo de Trabajo:{" "}
            <span className="font-normal normal-case">{EquipoTrabajo}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">
            Rating:{" "}
            <span className="font-normal normal-case">{EquipoRate}</span>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOpenModal}>I accept</Button>
        <Button color="gray" onClick={handleCloseModal}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
