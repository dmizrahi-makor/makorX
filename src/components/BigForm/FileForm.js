import * as React from 'react';
import { Box } from '@material-ui/core';
import { formData } from '../../utils/formData';
import UploaderField from './UploaderField';
import { useSelector } from 'react-redux';








const FileForm = ({ step }) => {
const state = useSelector(state=>state.formData.fullData)
console.log(state);
  return (
    <Box>
        <h3>Attach files</h3>
        {formData.form2.map(({id,label}) =>
             <UploaderField id={id} label = {label}  />
        )}

    </Box>
  );
}

export default FileForm;