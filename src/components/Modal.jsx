import React,{ useState } from 'react'
import Mensaje from './Mensaje'
import BtnCerrar from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [mensaje, setMensaje] = useState("")
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const onOcultarModal = () => {    
    setAnimarModal(false)
    setTimeout( () => { //Guardamos set para la transición
      setModal(false)
    }, 300);
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    if ([nombre,cantidad,categoria].includes("")) { //Si alguno está vacío
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => { //A los 3 mensajes quita el error en la pantalla
        setMensaje("");
      }, 3000);
      return;
    }  
    guardarGasto({nombre, cantidad, categoria }) 
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
      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={onSubmit}
        >
        <legend>Nuevo Gasto</legend>
        {
          mensaje&& <Mensaje tipo="error">{ mensaje }</Mensaje>
        }
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            type="text"
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Añade el Nombre del Gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={ e => setCantidad(Number(e.target.value))}
            placeholder="Añade la cantidad del gasto: ej: 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={ e => setCategoria(e.target.value)}
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