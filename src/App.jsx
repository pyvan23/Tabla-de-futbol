import "./App.css"; 
//import { AuthProvider } from "./auth/context/AuthProvider";
import { JugadoresProvider } from "./auth/context/JugadoresContext";
import { AppRouter } from "./router/AppRouter";

function App() {

    return (
  // <AuthProvider>
      <JugadoresProvider>

      <AppRouter />
      </JugadoresProvider>
   // </AuthProvider>
  );
}

export default App;
