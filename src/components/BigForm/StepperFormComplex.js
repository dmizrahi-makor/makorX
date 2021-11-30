import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PseudoForm from './PseudoForm';
import UploaderField from './UploaderField';
import FileForm from './FileForm';
import TermsForm from './TermsForm';
import ProgressBar from "./ProgressBar";
import { useSelector } from 'react-redux';
import {findNonEmptyValues} from "../../utils/tools"
import axios from 'axios';
import { isNotEmptyValue } from '../../utils/tools';
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const StepperFormComplex = () => {
  // const uuid = React.useRef(window.search); ///////FIXXXXXXXXXX
  const formState = useSelector(state => state.formData);
  const totalNumOfFields = React.useRef(Object.keys(formState).length);
  const [barValue, setBarValue] = React.useState(0);
  const [nonEmptyFields, setNonEmptyFields] = React.useState(0);
  React.useEffect(() => {
    setNonEmptyFields(findNonEmptyValues(formState));
    setBarValue(Math.round(nonEmptyFields * 100/totalNumOfFields.current));
    // console.log('fromstate updated', numOfNonEmptyFields, totalNumOfFields)
    
  }, [formState]);
//   const fields = {
//     asd:'asdsad',

   
    
//   }
// const doneFields = React.useState(0);
//   const totalNumOfFields = Object.keys(fields).length;

 
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});


  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box>
          <ProgressBar value={barValue} />
        <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
                </StepButton>
            </Step>
            ))}
        </Stepper>
        <Box>
            {allStepsCompleted() ? (
            <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
                </Box>
            </React.Fragment>
            ) : (
            <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>{
                  activeStep === 0? <PseudoForm/>: (activeStep === 1?<FileForm />:<p><TermsForm/></p>)
                  }</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {activeStep!==2?
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                </Button>
                :null}
                {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                        Step {activeStep + 1} already completed
                    </Typography>
                    ) : (
                    <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                    ))}
                </Box>
            </React.Fragment>
            )}
        </Box>
        </Box>
    </Box>
  );
}

export default StepperFormComplex;