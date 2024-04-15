import './ModalEntrada.css'

function ModalEntrada({ isOpen, onClose, monto, descripcion, handleInputChange, handleSave }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modalContent">
          <span className="closeButton" onClick={onClose}>X</span>
          <h2 className='tituloEntrada'>Entrada</h2>
          <label className='tituloMonto' htmlFor="monto">Monto:</label>
          <br />
          <input className='inputMonto' type="number" id="monto" name="monto" value={monto} onChange={handleInputChange} />
          <br />
          <label className='tituloDescripcion' htmlFor="descripcion">Descripción:</label>
          <br />
          <textarea className='descripcion' id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange} />
          <br />
          <button className='buttonEntrada' onClick={handleSave}>Guardar</button>
        </div>
      </div>
    )
  );
}

export default ModalEntrada;