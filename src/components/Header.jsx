import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">Mi Sitio</div>
      <div>
        <button onClick={()=>navigate('/admin')}>Admin</button>
      </div>
    </header>
  );
};