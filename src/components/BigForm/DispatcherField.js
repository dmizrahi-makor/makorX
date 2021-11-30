import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import formDataSlice, { formDataActions } from '../store/formDataSlice';
import { StyledHeaderTableCell } from './PseudoForm';

const DispatcherField =  (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.formData);
    console.log(state);
    

    const handleChange = async (e) => {
        e.preventDefault();
//////redux update
        dispatch(formDataActions.updateState({
            id: props.id,
            value: e.target.value
        }))
        const fieldToUpdate = {
          field:e.target.id,
          value:e.target.value
        }
        await axios.put('http://192.168.1.156:3030/api/contact/289334a4-50f3-11ec-be49-d08e7912923c',{fieldToUpdate})
        // axios.post('randomURLasdasdsadsad', data);
    };

  return (
    <StyledHeaderTableCell 
    InputLabelProps={{
      style: { color: 'white' },
    }}  fullWidth onChange={handleChange} label = {!props.value? props.label: ''}  value={props.value}/>
  );
}

export default DispatcherField;

