import React from 'react'

function BotonComponent({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>
}

export default BotonComponent