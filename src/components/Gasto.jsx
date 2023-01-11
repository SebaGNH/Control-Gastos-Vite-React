import React from 'react'
import icono_ahorro from '../img/icono_ahorro.svg'
import icono_casa from '../img/icono_casa.svg'
import icono_comida from '../img/icono_comida.svg'
import icono_ocio from '../img/icono_ocio.svg'
import icono_salud from '../img/icono_salud.svg'
import icono_gastos from '../img/icono_gastos.svg'
import icono_suscripciones from '../img/icono_suscripciones.svg'

export const Gasto = ({gasto}) => {

const diccionarioIconos = {
  ahorro: icono_ahorro,
  comida: icono_comida,
  casa: icono_casa,
  gastos: icono_gastos,
  ocio: icono_ocio,
  salud: icono_salud,
  suscripciones: icono_suscripciones
  }

  return (
    <div className='gasto sombra'>
      <div className="contenido-gasto">
        <div className="contenido-icono">
          <img src={diccionarioIconos[gasto.categoria]} alt="Icono Gasto" />
        </div>
        <div className="descripcion-gasto">
          <p className='categoria'> {gasto.categoria} </p>
          <p className='nombre-gasto'> {gasto.nombre} </p>
          <p className='fecha-gasto'>Agregado el:{' '}<span>{gasto.fecha}</span></p>
        </div>
        <p className='cantidad-gasto'> ${gasto.cantidad} </p>
      </div>
    </div>
  )
}
