import {  NavLink } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mi Sitio</div>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/Tabla">Tabla</NavLink>
      </nav>
      <LoginForm />
    </header>
  );
};