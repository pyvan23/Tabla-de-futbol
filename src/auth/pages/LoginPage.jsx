import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login('Ivan');
    navigate("/Tabla", { replace: true });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  };

  const inputStyle = {
    marginBottom: '10px',
    width: '100%',
    padding: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    width: '100%',
  };

  const socialLoginStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const iconStyle = {
    margin: '0 10px',
    cursor: 'pointer', 
  };

  return (
    <div style={containerStyle} className="container mt-5">
      <h1>Login</h1>
      <hr />
      <div style={formStyle}>
        <input type="email" placeholder="Email" style={inputStyle} className="form-control m-3" />
        <input type="password" placeholder="Password" style={inputStyle} className="form-control" />
        <button className="btn btn-primary" onClick={onLogin} style={buttonStyle}>
          Login
        </button>
        <div style={socialLoginStyle}>
          <FontAwesomeIcon icon={faGoogle} style={iconStyle} />
          <FontAwesomeIcon icon={faApple} style={iconStyle} />
          <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
        </div>
      </div>
    </div>
  );
};
