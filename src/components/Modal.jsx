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