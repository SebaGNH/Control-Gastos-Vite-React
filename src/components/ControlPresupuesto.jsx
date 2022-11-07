import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  //Convertimos formato a moneda dolar
  //const monedaPresupuesto = presupuesto.toLocaleString('en-US',{style:'currency', currency: 'USD'});
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US',{style:'currency', currency: 'USD'});
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formatearCantidad(0)}
        </p>
        <p>
          <span>Gastada:</span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto

