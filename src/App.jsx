import React, {useState} from 'react'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import {Header, Modal, ListadoGastos } from './components/'


const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])


  const onClickNuevoGasto = () => {
    setModal(true)

    setTimeout( () => {
      setAnimarModal(true);
      //console.log('Animando Modal')
    }, 500);
  }


  const guardarGasto = (gasto) => {
    setGastos([...gastos, gasto])

    //cerramos ventana modal
    setAnimarModal(false);
    setTimeout( () => {
      setModal(false)
    }, 500);

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
        <>
          <main>
            <ListadoGastos/>
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto} 
              alt="Icono Nuevo Gasto"
              onClick={onClickNuevoGasto} />
          </div>
        </>
      }
      {
        modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          />
      }
      
    </>
  )
}

export default App