import NavBar from "./NavBar";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header>
          <NavBar />
          <div className="h-[88px] flex items-center flex-row justify-between mx-[72px]">
            <h2 className="font-semibold text-2xl mt-8 mb-8">
              Mis Desembolsos
            </h2>
            <button className="bg-Button-Red w-[176px] h-[48px] rounded-full text-white text-sm font-bold mt-5 mb-5 flex items-center justify-start">
              <VerticalAlignBottomIcon
                className="w-6 ml-4 mr-5"
                color="primary"
              />
              Descargar
            </button>
          </div>
        </header>
      </ThemeProvider>
    </>
  );
};

export default Header;
