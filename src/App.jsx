import React, {useState} from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'


const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)


  const onClickNuevoGasto = () => {
    setModal(true)
  }

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {
        isValidPresupuesto &&
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} 
              alt="Icono Nuevo Gasto"
              onClick={onClickNuevoGasto} />
          </div>
      }
      {
        modal && <Modal setModal={setModal}/>
      }
      
    </>
  )
}

export default App