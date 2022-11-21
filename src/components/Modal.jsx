import React from 'react'
import BtnCerrar from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const onOcultarModal = () => {
    
    setAnimarModal(false)
    setTimeout( () => { //Guardamos set para la transición
      setModal(false)
    }, 300);

  }  
  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img 
          src={BtnCerrar} 
          alt="Botón Cerrar" 
          onClick={ onOcultarModal }
          />          
      </div>
      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            type="text"
            id="cantidad"
            placeholder="Añade la cantidad del gasto: ej: 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
          >
            <option value="">-- Seleccione una Categoría --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  )
}

export default Modal

/*
Al final ponemos '' para que también quite la clase animar
<form className={`formulario ${animarModal ? 'animar' : ''}`}>

: 'cerrar'}`}> reemplazamos por "cerrar" para que la transición sea más amigable
*/