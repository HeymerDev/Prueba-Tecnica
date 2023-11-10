import Grupo258 from "../assets/Grupo-258.svg";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => navigate("/login");

  return (
    <nav className="flex justify-between items-center p-3 h-[72px] shadow-navbar">
      <div className="flex items-center flex-grow justify-center mt-3 mb-3 ">
        <img src={Grupo258} alt="logo" className="h-6 w-24 m-3" />
      </div>

      <button
        id="log-out"
        className="flex items-center mr-6"
        onClick={cerrarSesion}
      >
        <h3 className="font-semibold mr-2">Cerrar Sesión</h3>
        <LoginOutlinedIcon />
      </button>
    </nav>
  );
};

export default NavBar;
