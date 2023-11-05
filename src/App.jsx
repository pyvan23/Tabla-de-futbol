import React from 'react';
import './App.css'; // Asegúrate de crear un archivo App.css para el estilo
import { Jugadores } from './components/Jugadores';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Puedes agregar un encabezado aquí si lo deseas */}
      </header>
      <main>
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
          
           <Jugadores/>
         
        </table>
      </main>
    </div>
  );
}

export default App;
