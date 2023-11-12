

export const LoginForm = () => {
    return (
      <div className="login-container">
        <input type="text" placeholder="Usuario" id="username" required />
        <input type="password" placeholder="Contraseña" id="password" required />
        <button>Ingresar</button>
      </div>
    );
  };
  