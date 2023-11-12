import "./App.css"; // Asegúrate de crear un archivo App.css para el estilo
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

function App() {

    return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
