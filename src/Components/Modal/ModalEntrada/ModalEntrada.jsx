import './ModalEntrada.css'

function ModalEntrada({ isOpen, onClose, monto, descripcion, handleInputChange, handleSave }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modalContent">
          <span className="closeButton" onClick={onClose}>X</span>
          <h2>Entrada</h2>
          <label htmlFor="monto">Monto:</label>
          <br />
          <input type="number" id="monto" name="monto" value={monto} onChange={handleInputChange} />
          <br />
          <label htmlFor="descripcion">Descripción:</label>
          <br />
          <textarea id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange} />
          <br />
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    )
  );
}

export default ModalEntrada;