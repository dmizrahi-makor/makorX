import React, { useEffect } from 'react';
import { Box, makeStyles, createStyles } from '@material-ui/core';
import { Stepper } from '@material-ui/core';
import { Step } from '@material-ui/core';
import { StepButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import PseudoForm from './PseudoForm';
import FileForm from './FileForm';
import TermsForm from './TermsForm';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { formDataActions } from '../store/formDataSlice';
import { useDispatch } from 'react-redux';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiSvgIcon-root.MuiStepIcon-root': {
      width: '5rem',
    },
    '& .MuiStepLabel-root.MuiStepLabel-horizontal': {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
    '& .MuiStepLabel-iconContainer': {
      padding: '0',
    },
    '& .MuiSvgIcon-root.MuiStepIcon-root': {
      transform: 'scale(2) translateY(30%)',
    },
  },
}));

const StepperFormComplex = () => {
  // const uuid = React.useRef(window.search); ///////FIXXXXXXXXXX
  const formState = useSelector((state) => state.formData);
  const totalNumOfFields = React.useRef(Object.keys(formState).length);
  const [barValue, setBarValue] = React.useState(0);
  const [nonEmptyFields, setNonEmptyFields] = React.useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    console.log('inside Use effect');
    axios
      .all([
        axios.get(
          'http://10.0.0.197:3030/api/onboarding/289334a4-50f3-11ec-be49-d08e7912923c'
        ),
        axios.get(
          'http://10.0.0.197:3030/api/file/289334a4-50f3-11ec-be49-d08e7912923c'
        ),
      ])
      .then(
        axios.spread(function (res1, res2) {
          const textFields = res1.data[0];
          const fileFields = {};
          res2.data.forEach((file) => {
            fileFields[file.field_name] = file.file_name;
          });
          const fullData = { ...textFields, ...fileFields };
          dispatch(formDataActions.uploadFields(fullData));
          console.log('formState', fullData);
        })
      )
      .catch((err) => console.log(err));
  }, []);
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

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  return (
    <Box className={classes.container}>
      <ProgressBar value={barValue} />
      <Box sx={{ width: '100%' }}>
        <Stepper className={classes.stepper} nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                sx={{ color: 'white', width: '5%' }}
                className={classes.root}
                color='inherit'
                onClick={handleStep(index)}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <Box>
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 ? (
                <PseudoForm value={formState} />
              ) : activeStep === 1 ? (
                <FileForm />
              ) : (
                <p>
                  <TermsForm />
                </p>
              )}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {activeStep !== 2 ? (
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
              ) : null}
            </Box>
          </React.Fragment>
        </Box>
      </Box>
    </Box>
  );
};

export default StepperFormComplex;
