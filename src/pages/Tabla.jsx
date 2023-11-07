import { Jugadores } from '../components/Jugadores'

export const Tabla = () => {
  return (
  <>
  
  
<h1>2023</h1>
<table>
  <thead>
    <tr>
      <th>JUGADORES</th>
      <th>PTOS</th>
      <th>ASISTENCIA</th>
      <th>GANADOS</th>
      <th>% EFECT.</th>
      <th>% ASISTENCIA</th>
    </tr>
  </thead>
  <Jugadores />
</table>
</>
  )
}


