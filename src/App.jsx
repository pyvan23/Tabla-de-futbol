import { JugadoresProvider } from "./context/JugadoresContext";
import { AppRouter } from "./router/AppRouter";

function App() {

    return (

      <JugadoresProvider>
         <AppRouter />
      </JugadoresProvider>
  
  );
}

export default App;
