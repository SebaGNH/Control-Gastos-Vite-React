import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <>
      <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input 
              type="text" 
              className="nuevo-presupuesto" 
              placeholder='Añade tu Presupuesto'
            />
            <input 
              type="submit" 
              value="Añadir" 
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default NuevoPresupuesto