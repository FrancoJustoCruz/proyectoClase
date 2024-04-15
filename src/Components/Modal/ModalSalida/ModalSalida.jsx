import './ModalSalida.css'

function ModalSalida({ isOpen, onClose, monto, descripcion, categoria, handleInputChange, handleSave }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modalContent">
          <span className="closeButton" onClick={onClose}>X</span>
          <h2>Salida</h2>
          <label className='tituloMonto' htmlFor="montoSalida">Monto:</label>
          <br />
          <input className='inputMonto' type="number" id="montoSalida" name="monto" value={monto} onChange={handleInputChange} />
          <br />
          <label className='tituloCategoria' htmlFor="categoria">Seleccionar Categoría:</label>
          <br />
          <select className='listaCategoria' id="categoria" name="categoria" value={categoria} onChange={handleInputChange}>
            <option value="">Seleccione una categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="comidaMichi">Comida para el michi</option>
            
          </select>
          <br />
          <label className='tituloDescripcion' htmlFor="descripcion">Descripción:</label>
          <br />
          <textarea id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange} />
          <br />
          <button className='buttonSalida' onClick={handleSave}>Guardar</button>
        </div>
      </div>
    )
  )
}

export default ModalSalida;