import React, {useState, useEffect} from 'react'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import {Header, Modal, ListadoGastos } from './components/'
import { getFecha } from './helpers'

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})


  const onClickNuevoGasto = () => {
    setModal(true)

    setTimeout( () => {
      setAnimarModal(true);
      //console.log('Animando Modal')
    }, 500);
  }


  const guardarGasto = (gasto) => {
    //gasto.fecha = Date.now();
    //const fechaNueva = new Date();
    const fechaNueva = Date.now();
    gasto.fecha = getFecha(fechaNueva);
    setGastos([...gastos, gasto])

    //cerramos ventana modal
    setAnimarModal(false);
    setTimeout( () => {
      setModal(false)
    }, 500);

  }

  useEffect(() => {
    if ( Object.keys(gastoEditar).length > 0 ) {
      onClickNuevoGasto();
      console.log("Editar lleno")
    }
  }, [gastoEditar])
  

  return (
    <div className={modal ? 'fijar': ''}> {/* Da error con && */}
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {
        isValidPresupuesto &&
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
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
      
    </div>
  )
}

export default App