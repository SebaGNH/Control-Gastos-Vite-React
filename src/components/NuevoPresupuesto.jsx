import React, {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setMensaje] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto valido")      
    }else{
      setMensaje("Si es un presupuesto valido")
    }
  }
  return (
    <>
      <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={onSubmit}>
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input 
              type="text" 
              className="nuevo-presupuesto" 
              placeholder='Añade tu Presupuesto'
              value={presupuesto}
              onChange={ (e) => setPresupuesto(e.target.value)}
            />
            <input 
              type="submit" 
              value="Añadir" 
            />
          </div>
          {
            mensaje && <Mensaje tipo='error'> {mensaje}</Mensaje>
          }
        </form>
      </div>
    </>
  )
}

export default NuevoPresupuesto