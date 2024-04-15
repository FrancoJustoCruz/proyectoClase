import React, { useState } from 'react'
import './App.css'

import BotonComponent from './Components/Boton/BotonComponent'
import ModalEntrada from './Components/Modal/ModalEntrada/ModalEntrada'
import ModalSalida from './Components/Modal/ModalSalida/ModalSalida'

function App() {
  const [modalEntradaOpen, setModalEntradaOpen] = useState(false)
  const [modalSalidaOpen, setModalSalidaOpen] = useState(false)

  // Estados para el modal de entrada
  const [montoEntrada, setMontoEntrada] = useState('');
  const [descripcionEntrada, setDescripcionEntrada] = useState('')

  // Estados para el modal de salida
  const [montoSalida, setMontoSalida] = useState('');
  const [descripcionSalida, setDescripcionSalida] = useState('')
  const [categoriaSalida, setCategoriaSalida] = useState('')

  const handleModalEntradaToggle = () => {
    setModalEntradaOpen(!modalEntradaOpen)
  }

  const handleModalSalidaToggle = () => {
    setModalSalidaOpen(!modalSalidaOpen)
  }

  const handleInputChangeEntrada = (event) => {
    const { name, value } = event.target
    if (name === 'monto') {
      if (!isNaN(value)) {
        setMontoEntrada(value);
      }
    } else if (name === 'descripcion') {
      setDescripcionEntrada(value)
    }
  }

  const handleInputChangeSalida = (event) => {
    const { name, value } = event.target
    if (name === 'monto') {
      if (!isNaN(value)) {
        setMontoSalida(value);
      }
    } else if (name === 'descripcion') {
      setDescripcionSalida(value)
    } else if (name === 'categoria') {
      setCategoriaSalida(value)
    }
  }

  return (
    <>
      <div className="mainContainer">
        <div className="titulo">Control de Ingresos y Gastos</div>
        <div className="spanSaldo">
          <span className='saldoActual'>Saldo</span>
        </div>
        <div className="buttonsContainer">
          <BotonComponent texto="Nueva Entrada" onClick={handleModalEntradaToggle} />
          <BotonComponent texto="Nuevo Gasto" onClick={handleModalSalidaToggle} />
          <BotonComponent texto="Reportes" />
          <BotonComponent texto="Configuración" />
        </div>
      </div>

      <ModalEntrada
        isOpen={modalEntradaOpen}
        onClose={handleModalEntradaToggle}
        monto={montoEntrada}
        descripcion={descripcionEntrada}
        handleInputChange={handleInputChangeEntrada}
        handleSave={handleModalEntradaToggle}
      />

      <ModalSalida
        isOpen={modalSalidaOpen}
        onClose={handleModalSalidaToggle}
        monto={montoSalida}
        descripcion={descripcionSalida}
        categoria={categoriaSalida}
        handleInputChange={handleInputChangeSalida}
        handleSave={handleModalSalidaToggle}
      />
    </>
  );
}

export default App