import React, {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");
      setIsValidPresupuesto(false);
      return;      
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  }
  return (
    <>
      <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={onSubmit}>
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input 
              type="number" 
              className="nuevo-presupuesto" 
              placeholder='Añade tu Presupuesto'
              value={presupuesto}
              onChange={ (e) => setPresupuesto(Number(e.target.value))}
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