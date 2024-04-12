import React, { useState } from 'react'
import './App.css'

import BotonComponent from './Components/Boton/BotonComponent'
import ModalEntrada from './Components/Modal/ModalEntrada/ModalEntrada'
import ModalSalida from './Components/Modal/ModalSalida/ModalSalida'

function App() {
  const [modalEntradaOpen, setModalEntradaOpen] = useState(false)
  const [modalSalidaOpen, setModalSalidaOpen] = useState(false)
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleModalEntradaToggle = () => {
    setModalEntradaOpen(!modalEntradaOpen)
  }

  const handleModalSalidaToggle = () => {
    setModalSalidaOpen(!modalSalidaOpen)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === 'monto') {
      if (!isNaN(value)) {
        setMonto(value);
      }
    } else if (name === 'descripcion') {
      setDescripcion(value)
    } else if (name === 'categoria') {
      setCategoria(value)
    }
  }

  return (
    <>
      <div className="mainContainer">
        <h1 className="titulo">Control de Ingresos y Gastos</h1>
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
        monto={monto}
        descripcion={descripcion}
        handleInputChange={handleInputChange}
        handleSave={handleModalEntradaToggle}
      />

      <ModalSalida
        isOpen={modalSalidaOpen}
        onClose={handleModalSalidaToggle}
        monto={monto}
        descripcion={descripcion}
        categoria={categoria}
        handleInputChange={handleInputChange}
        handleSave={handleModalSalidaToggle}
      />
    </>
  );
}

export default App