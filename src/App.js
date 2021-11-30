import { Container, createTheme, ThemeProvider } from "@mui/material";
import BigForm from "./components/BigForm";
import PseudoForm from "./components/BigForm/PseudoForm";
import StepperFormComplex from "./components/BigForm/StepperFormComplex";
import ProgressBar from "./components/BigForm/ProgressBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const theme = createTheme({});

const App = () => {
  console.log("process.env.PORT", process.env.REACT_PORT);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* <BigForm /> */}
        <StepperFormComplex />
      </Container>
    </ThemeProvider>
  );
};

export default App;
