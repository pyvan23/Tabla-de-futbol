import { Link } from "react-router-dom";

<header className="header">
<div className="logo">Mi Sitio</div>
<nav>
  {/* Agregar enlaces para la navegación */}
  <Link to="/">Inicio</Link> 
  <Link to="/Armado">Armado</Link>
  <Link to="/Tabla">Tabla</Link>
</nav>
<div className="login-container">
  <input type="text" placeholder="Usuario" id="username" required />
  <input
    type="password"
    placeholder="Contraseña"
    id="password"
    required
  />
  <button>Ingresar</button>
</div>
</header>