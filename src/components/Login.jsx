import Grupo258 from "../assets/Grupo-258.svg";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ABB9C780",
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.includes(("@" && ".co") || ".com") &&
      email.length >= 9 &&
      password.length >= 6
    ) {
      navigate("/dashboard");
    } else if (email.length < 9 || password.length < 6) {
      alert(
        "El email debe tener minimo 9 caracteres \nLa contraseña debe tener minimo 6 caracteres"
      );
    } else {
      alert("Direccion de correo invalida, debe incluir: @, .com o .co");
    }
    console.log(`${email} ${password}`);
  };

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEamil(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center mt-[148px] absolute items-center">
        <div className="w-[400px] h-[476px] flex justify-center flex-col text-center items-center">
          <img src={Grupo258} alt="logo" className="m-3 h-[76px]" />
          <h3 className="font-bold text-[40px]">SufiPay</h3>
          <p className="text-base">Administrador comercial</p>
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="shadow-3xl rounded-xl my-8 p-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={email}
                  placeholder=" "
                  className={`w-[368px] h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs my-[6px] ${
                    email.length >= 9 &&
                    email.includes(("@" && ".co") || ".com")
                      ? "border border-input"
                      : email.length === 0
                      ? "border border-input"
                      : "border border-red-500"
                  }`}
                  id="user"
                  onChange={handleEmail}
                />
                <label
                  htmlFor="user"
                  className={`absolute left-0 ml-4 labels ${
                    email.length >= 9 &&
                    email.includes(("@" && ".co") || ".com")
                      ? "text-[#ABB9C7]"
                      : email.length === 0
                      ? "text-[#ABB9C7]"
                      : "text-red-500"
                  }`}
                >
                  Usuario
                </label>
              </div>
              <div className="relative flex items-center ">
                <input
                  type="password"
                  value={password}
                  placeholder=" "
                  className={`h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs my-[6px] w-[368px] ${
                    password.length === 0
                      ? "border border-input"
                      : password.length >= 6
                      ? "border border-input"
                      : "border border-red-500"
                  } `}
                  id="password"
                  onChange={handlePassword}
                />
                <label
                  htmlFor="password"
                  className={`absolute left-0 ml-4 labels text-[#ABB9C7] ${
                    password.length === 0
                      ? "text-[#ABB9C7]"
                      : password.length >= 6
                      ? "text-[#ABB9C7]"
                      : "text-red-500"
                  }`}
                >
                  Contraseña
                </label>
              </div>
            </div>
            <button
              className="rounded-3xl bg-Button-Red font-bold text-white text-base py-[14px] px-6 h-12 w-[174px] m-auto"
              type="submit"
            >
              INGRESAR
            </button>
          </form>
          <a href="#" className="text-xs underline leading-4">
            No recuerdo mi contraseña
          </a>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
