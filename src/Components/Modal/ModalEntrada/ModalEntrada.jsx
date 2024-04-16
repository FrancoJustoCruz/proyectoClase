import React, { useState } from 'react';
import './ModalEntrada.css';

function ModalEntrada({ isOpen, onClose }) {
  const [monto, setMonto] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'monto') {
      if (!isNaN(value)) {
        setMonto(value);
      }
    } else if (name === 'descripcion') {
      setDescripcion(value);
    }
  };

  const handleSave = () => {
    onClose();
  };

  return (
    isOpen && (
      <div className="modalEntrada">
        <div className="modalEntradaContent">
          <span className="closeButton" onClick={onClose}>X</span>

          <h2>Entrada</h2>
          <form className='form-entrada'>
            <label htmlFor="monto">Monto:</label>
            <input type="number" id="monto" name="monto" value={monto} onChange={handleInputChange} />
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange} />
            <button onClick={handleSave}>Guardar</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ModalEntrada;