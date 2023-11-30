import { useNavigate } from "react-router-dom";
import './Header.css';
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header >
      <div className="logo">Mi Sitio</div>
      <div>
        <button onClick={()=>navigate('/admin')}>Admin</button>
      </div>
    </header>
  );
};