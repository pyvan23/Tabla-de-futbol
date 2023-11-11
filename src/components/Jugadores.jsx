/* eslint-disable react/prop-types */


export const Jugadores =  ( { jugadores } ) => {


  const calcularPorcentaje = (valor, total) => {
    if (total > 0) {
      return ((valor / total) * 100).toFixed(2) + "%";
    }
    return "0%";
  };
  return (
    <>
      <tbody>
        {jugadores.map((jugador) => (
          <tr key={jugador.id}>
            <td>{jugador.nombre}</td>
            <td>{jugador.ptos}</td>
            <td>{jugador.asistencia}</td>
            <td>{jugador.ganados}</td>
            <td>{calcularPorcentaje(jugador.ganados, jugador.ptos)}</td>
            <td>{calcularPorcentaje(jugador.asistencia, jugador.ptos)}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};
