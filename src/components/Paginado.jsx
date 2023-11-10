import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const theme = createTheme({
  palette: {
    red: {
      main: "#DD3542",
    },
  },
});

const Paginado = ({ sacarOpcion, sacarPagina }) => {
  const typesRegister = [16, 10, 8];

  const [numberPage, SetNumberPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(16);
  const [limitPage, setLimitPage] = useState(10);

  useEffect(() => {
    sacarPagina(numberPage);
  }, [numberPage, sacarPagina]);

  useEffect(() => {
    if (selectedOption === 16) {
      setLimitPage(10);
    } else if (selectedOption === 10) {
      setLimitPage(16);
    } else {
      setLimitPage(20);
    }
  }, [selectedOption]);

  const decreasePage = () =>
    numberPage > 1 ? SetNumberPage(numberPage - 1) : SetNumberPage(numberPage);

  const increasePage = () => {
    numberPage < limitPage
      ? SetNumberPage(numberPage + 1)
      : SetNumberPage(numberPage);
  };

  const toggleOptions = () => setShowOptions(!showOptions);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    sacarOpcion(option);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <section className="bg-white flex h-[80px] w-[508px] text-[#414141] shadow shadow-paginado items-center rounded-t-xl fixed bottom-0 z-10">
          <div className="w-[204px] h-[48px] flex justify-center items-center">
            <div className="w-[48px] h-[48px] my-3 flex items-center">
              <button className="mx-3 my-3" onClick={decreasePage}>
                <ArrowBackIosIcon color="red" />
              </button>
            </div>

            <div className="flex border border-[#ABB9C780] rounded-lg w-[48px] h-[48px] items-center justify-center">
              <span className="text-base">{numberPage}</span>
            </div>
            <span className="ml-2 text-base"> de {limitPage}</span>

            <div className="w-[48px] h-[48px] my-3 flex items-center">
              <button className="mx-3 my-3" onClick={increasePage}>
                <ArrowForwardIosIcon color="red" />
              </button>
            </div>
          </div>

          <div className="relative my-3 mx-3 flex items-center">
            <input
              type="text"
              value={selectedOption}
              placeholder=" "
              className="border border-input w-[268px] h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs appearance-none"
              id="tipo"
              disabled
            />
            <label
              htmlFor="tipo"
              className="labels absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Registros por Pagina
            </label>
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={toggleOptions}
            >
              <ExpandMoreIcon color="red" sx={{ fontSize: 40 }} />
            </button>
            {showOptions && (
              <ul className="absolute bottom-12 bg-white border rounded-lg w-[268px]">
                {typesRegister.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer hover:bg-[#ABB9C7] w-full p-2 transition-all"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </ThemeProvider>
    </>
  );
};

Paginado.propTypes = {
  sacarOpcion: PropTypes.func.isRequired,
  sacarPagina: PropTypes.func.isRequired,
};

export default Paginado;
