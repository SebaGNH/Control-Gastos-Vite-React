import {useState, useEffect } from "react";
export const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0)

  //Convertimos formato a moneda dolar
  //const monedaPresupuesto = presupuesto.toLocaleString('en-US',{style:'currency', currency: 'USD'});
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US',{style:'currency', currency: 'USD'});
  }

  useEffect(() => {
    //itera los gastos "cantidad" y nos da el total gastado, 0 es el valor inicial
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 )
    setGastado(totalGastado);
    setDisponible( presupuesto - totalGastado )
  }, [gastos])




  
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>grafica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> { formatearCantidad(presupuesto) }
        </p>
        <p>
          <span>Disponible:</span> { formatearCantidad(disponible) }
        </p>
        <p>
          <span>Gastada:</span> { formatearCantidad(gastado) }
        </p>
      </div>
    </div>
  )
}



