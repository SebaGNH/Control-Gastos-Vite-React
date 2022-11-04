import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>presupuesto:</span> {presupuesto}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto