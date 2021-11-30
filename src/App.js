import { Container } from "@mui/material";
import BigForm from "./components/BigForm";
import PseudoForm from "./components/BigForm/PseudoForm";
import StepperFormComplex from "./components/BigForm/StepperFormComplex";
import ProgressBar from "./components/BigForm/ProgressBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const App = () => {


  return (
    <Container >
      {/* <BigForm /> */}
      < StepperFormComplex/>
    </Container>
  );
}


export default App;
