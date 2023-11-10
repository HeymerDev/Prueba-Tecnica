import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF",
    },
  },
});

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        {showAlert && (
          <section
            className="w-[236px] h-[108px] bg-white mt-3 mr-3 rounded-xl fixed bottom-8 z-10 shadow shadow-alert ml-[866px] alert"
            id="alert"
          >
            <button
              className="bg-Button-Red rounded-full w-6 h-6 flex items-center justify-center float-right relative bottom-2 -right-3"
              onClick={handleCloseAlert}
            >
              {" "}
              <CloseIcon color="white" fontSize="small" />
            </button>
            <div className="w-[196px] h-[68px] m-5">
              <p>
                Pedro Perez ha hecho <br />
                una compra por
              </p>
              <h4 className="font-bold">1.800.000</h4>
            </div>
          </section>
        )}
      </ThemeProvider>
    </>
  );
};

export default Alert;
