import './ModalSalida.css'

function ModalSalida({ isOpen, onClose, monto, descripcion, categoria, handleInputChange, handleSave }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modalContent">
          <span className="closeButton" onClick={onClose}>X</span>
          <h2>Salida</h2>
          <label htmlFor="montoSalida">Monto:</label>
          <br />
          <input type="number" id="montoSalida" name="monto" value={monto} onChange={handleInputChange} />
          <br />
          <label htmlFor="categoria">Seleccionar Categoría:</label>
          <br />
          <select id="categoria" name="categoria" value={categoria} onChange={handleInputChange}>
            <option value="">Seleccione una categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="comidaMichi">Comida para el michi</option>
            
          </select>
          <br />
          <label htmlFor="descripcion">Descripción:</label>
          <br />
          <textarea id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange} />
          <br />
          <button onClick={handleSave}>Guardar</button>
        </div>
      </div>
    )
  )
}

export default ModalSalida;