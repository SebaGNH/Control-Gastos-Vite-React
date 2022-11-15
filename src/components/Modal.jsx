import React from 'react'
import BtnCerrar from '../img/cerrar.svg'

const Modal = ({setModal}) => {
  const onOcultarModal = () => {
    setModal(false)
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
    </div>
  )
}

export default Modal