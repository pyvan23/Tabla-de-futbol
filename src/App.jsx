import "./App.css"; // Asegúrate de crear un archivo App.css para el estilo
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/appRouter";

function App() {

  const jugadoresSelect = ['1','1','1','1','1']

  return (
    <AuthProvider>
      <AppRouter jugadoresSelect={jugadoresSelect}/>
    </AuthProvider>
  );
}

export default App;
