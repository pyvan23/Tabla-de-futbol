import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Admin");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" id="username" required />
        <input type="password" placeholder="Contraseña" id="password" required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};
