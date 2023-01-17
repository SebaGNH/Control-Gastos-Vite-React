import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css'; //Los efectos o animaciones

import React from 'react'
import icono_ahorro from '../img/icono_ahorro.svg'
import icono_casa from '../img/icono_casa.svg'
import icono_comida from '../img/icono_comida.svg'
import icono_ocio from '../img/icono_ocio.svg'
import icono_salud from '../img/icono_salud.svg'
import icono_gastos from '../img/icono_gastos.svg'
import icono_suscripciones from '../img/icono_suscripciones.svg'

export const Gasto = ({ gasto, setGastoEditar }) => {

const diccionarioIconos = {
  ahorro: icono_ahorro,
  comida: icono_comida,
  casa: icono_casa,
  gastos: icono_gastos,
  ocio: icono_ocio,
  salud: icono_salud,
  suscripciones: icono_suscripciones
  }

  //Evento del lado izquierdo
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  //Evento del lado derecho // Eliminar automáticamente
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('Swipe Eliminar')}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
    
  )
}
