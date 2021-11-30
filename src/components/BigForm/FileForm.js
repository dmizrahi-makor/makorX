import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DispatcherField from './DispatcherField';
import { formData } from '../../utils/formData';
import UploaderField from './UploaderField';
import { useSelector } from 'react-redux';








const FileForm = ({ step }) => {
const state = useSelector(state=>state.formData)
console.log(state);
  return (
    <Box>
        <h3>Attach files</h3>
        {formData.form2.map(({id,label}) =>
             <UploaderField id={id} label = {label} />
        )}

    </Box>
  );
}

export default FileForm;