import React from 'react';
import './App.css';
import BotonComponent from './Components/Boton/BotonComponent';
import ModalEntrada from './Components/Modal/ModalEntrada/ModalEntrada';
import ModalSalida from './Components/Modal/ModalSalida/ModalSalida';

function App() {
  const [modalEntradaOpen, setModalEntradaOpen] = React.useState(false);
  const [modalSalidaOpen, setModalSalidaOpen] = React.useState(false);

  const handleModalEntradaToggle = () => {
    setModalEntradaOpen(!modalEntradaOpen);
  };

  const handleModalSalidaToggle = () => {
    setModalSalidaOpen(!modalSalidaOpen);
  };

  const handleSaveEntrada = (monto, descripcion) => {
   
    console.log('Datos guardados de la modal de entrada:', monto, descripcion);
  };
  const handleSaveSalida = (monto, descripcion, categoria) => {
    console.log('Datos guardados de la modal de salida:', monto, descripcion, categoria);
  };

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
        handleSave={handleSaveEntrada}
      />

      <ModalSalida
        isOpen={modalSalidaOpen}
        onClose={handleModalSalidaToggle}
        handleSave={handleSaveSalida}
      />
    </>
  );
}

export default App;