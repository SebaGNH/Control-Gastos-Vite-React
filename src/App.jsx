import React, {useState} from 'react'
import Header from './components/Header'



const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)

  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      />
      
    </>
  )
}

export default App