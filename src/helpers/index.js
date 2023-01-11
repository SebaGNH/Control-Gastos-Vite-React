export const generarID = () => {
  return Math.random().toString(36).substring(2);
}


export const getFecha = (fechaNueva) => {
  //console.log(fechaNueva) // 1673395779634
  const fecha = new Date(fechaNueva);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
  //console.log(fechaFormateada)
  return fechaFormateada;
}