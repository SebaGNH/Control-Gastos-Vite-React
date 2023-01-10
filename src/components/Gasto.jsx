import React from 'react'

export const Gasto = ({gasto}) => {
  return (
    <div className='gasto sombra'>
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className='categoria'> {gasto.categoria} </p>
          <p className='categoria'> {gasto.nombre} </p>
          <p className='categoria'> {gasto.cantidad} </p>
        </div>
      </div>
    </div>
  )
}
