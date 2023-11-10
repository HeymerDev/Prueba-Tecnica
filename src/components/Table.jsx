import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  palette: {
    red: {
      main: "#DD3542",
    },
    white: {
      main: "#FFFFFF",
    },
  },
});

const Table = () => {
  const typesDocuments = ["Cedula", "Pasaporte", "Cedula Extranjera"];
  useEffect(() => {
    document.getElementById("hasta").value = null;
    document.getElementById("desde").value = null;
  }, []);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [inputTypeDesde, setInputTypeDesde] = useState("text");
  const [inputTypeHasta, setInputTypeHasta] = useState("text");
  const [dateDesde, setDateDesde] = useState("");
  const [dateHasta, setDateHasta] = useState("");
  const [numero, setNumero] = useState(0);
  const [desembolso, setDesembolso] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleFocusDesde = () => setInputTypeDesde("date");
  const handleBlurDesde = () => setInputTypeDesde("text");

  const handleFocusHasta = () => setInputTypeHasta("date");
  const handleBlurHasta = () => setInputTypeHasta("text");

  const toggleOptions = () => setShowOptions(!showOptions);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleInputChange = () => {
    // Lógica para determinar si algún input está lleno
    const inputValues = [
      selectedOption,
      numero,
      desembolso,
      dateDesde,
      dateHasta,
    ];
    const isAnyInputFilled = inputValues.some((value) => value !== "");

    setShowButton(isAnyInputFilled);
  };

  const handleChangeDesde = (e) => setDateDesde(e.target.value);

  const handleChangeHasta = (e) => setDateHasta(e.target.value);

  const handleReset = () => {
    // Borra el valor del input
    document.getElementById("documento").value = "";
    document.getElementById("desembolso").value = "";
  };

  const resetInputs = () => {
    setSelectedOption("");
    setNumero(0);
    setDesembolso(0);
    setDateDesde("");
    setDateHasta("");
    // Oculta el botón
    setShowButton(false);
    handleReset();
  };

  const changeNumero = (e) => {
    const numero = e.target.value;
    setNumero(numero);
  };

  const changeDesembolso = (e) => {
    const desembolso = e.target.value;
    setDesembolso(desembolso);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {showButton && (
          <button
            className="bg-Button-Red rounded-full w-6 h-6 mt-6 ml-[28px] mr-5 absolute flex items-center justify-center"
            onClick={resetInputs}
          >
            <CloseIcon color="white" fontSize="small" />
          </button>
        )}
        <section className="flex justify-between mx-[72px] mt-4 flex-wrap forms">
          <div className="relative flex items-center">
            <input
              type="text"
              value={selectedOption}
              placeholder=" "
              className="border border-input w-[320px] h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs appearance-none"
              id="tipo"
              disabled
              onChange={() => {
                handleInputChange();
              }}
            />
            <label
              htmlFor="tipo"
              className="labels absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Tipo Doc.
            </label>
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={toggleOptions}
            >
              <ExpandMoreIcon color="red" sx={{ fontSize: 40 }} />
            </button>
            {showOptions && (
              <ul className="absolute top-12 bg-white border rounded-lg w-[320px] list">
                {typesDocuments.map((option, index) => (
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

          <div className="relative flex items-center">
            <input
              type="number"
              placeholder=" "
              className="border border-input w-[320px] h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs"
              id="documento"
              onChange={(e) => {
                changeNumero(e);
                handleInputChange();
              }}
            />
            <label
              htmlFor="documento"
              className="absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Numero de Documento
            </label>
          </div>

          <div className="relative flex items-center">
            <input
              type="number"
              placeholder=" "
              className="border border-input w-[320px] h-[56px] pl-4  pt-4 rounded-lg focus:outline-none inputs"
              id="desembolso"
              onChange={(e) => {
                changeDesembolso(e);
                handleInputChange();
              }}
            />
            <label
              htmlFor="desembolso"
              className="absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Numero de Desembolso
            </label>
          </div>

          <div className="relative flex items-center">
            <input
              type={inputTypeDesde}
              value={dateDesde}
              placeholder=" "
              className="border border-input w-[320px] h-[56px] pl-4 pt-4 rounded-lg focus:outline-none inputs"
              id="desde"
              onFocus={handleFocusDesde}
              onBlur={handleBlurDesde}
              onChange={(e) => {
                handleChangeDesde(e);
                handleInputChange();
              }}
            />
            <label
              htmlFor="desde"
              className="absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Desde
            </label>
            <button
              className="absolute top-0 right-0 px-3 py-2 mt-4 flex items-center"
              id="icon"
            >
              <CalendarMonthIcon color="red" />
            </button>
          </div>

          <div className="relative flex items-center">
            <input
              type={inputTypeHasta}
              value={dateHasta}
              placeholder=" "
              className="border border-input w-[320px] h-[56px] pl-4 pt-4 rounded-lg focus:outline-none inputs"
              id="hasta"
              onFocus={handleFocusHasta}
              onBlur={handleBlurHasta}
              onChange={(e) => {
                handleChangeHasta(e);
                handleInputChange();
              }}
            />
            <label
              htmlFor="hasta"
              className="absolute left-0 ml-4 labels text-[#ABB9C7]"
            >
              Desde
            </label>
            <button className="absolute top-0 right-0 px-3 py-2 mt-4" id="icon">
              <CalendarMonthIcon color="red" />
            </button>
          </div>
        </section>
      </ThemeProvider>
    </>
  );
};

export default Table;
