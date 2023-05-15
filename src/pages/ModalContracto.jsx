import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import Datepicker from "tailwind-datepicker-react";

const options = {
  title: "Demo Title",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date(),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-red-500",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-12",
  defaultDate: new Date(),
  language: "en",
};

const ModalContracto = ({ isOpen, onClose }) => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    celular: 0,
    empresa: "",
    fecha:""

  });
  console.log(datos)

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenModal = () => {
    console.log("abriendo modal");
  };

  const handleCloseModal = () => {
    console.log("cerrando modal");
    onClose();
  };

  const [show, setShow] = useState(null);
  const handleClose = (state) => {
    setShow(state);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange1 = (selectedDate) => {
    setDatos({
      ...datos,
      fecha: selectedDate,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("mandando formulario");
  //   console.log(datos);
  // };

  return (
    <>
      <Modal show={isOpen} onClose={handleCloseModal}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <form action="https://formsubmit.co/vtrujillocharalla@gmail.com" method="POST" >
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="nombre"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={handleChange}
                      value={datos.nombre}
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Nombres
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="apellido"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={handleChange}
                      value={datos.apellido}
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Apellidos
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[9][0-9]{8}"
                      name="celular"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={handleChange}
                      value={datos.celular}
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (+51)(990099120)
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="empresa"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required=""
                      onChange={handleChange}
                      value={datos.empresa}
                    />
                    <label
                      htmlFor="floating_company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                    </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <Datepicker
                    options={options}
                    onChange={handleChange1}
                    show={show}
                    setShow={handleClose}
                    value={selectedDate}
                    name="fecha"
                  />
                </div>
                </div>
                <input type="submit" value="Enviar"/>
              </form>
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleOpenModal}>I accept</Button> */}
          <Button color="gray" onClick={handleCloseModal}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContracto;