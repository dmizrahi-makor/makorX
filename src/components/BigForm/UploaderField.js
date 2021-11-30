import { Container, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../store/formDataSlice";
import { withStyles } from "@mui/styles";


const UploaderField = (props) => {
  const state = useSelector(state=>state.formData);
  const dispatch = useDispatch();
    const [isUploaded, setUploaded] = useState(false);
const handleChange = ({target}) => {
console.log('GORE',props.id,target.files);
  dispatch(formDataActions.fileUpload({id:props.id,value:target.files[0]}))
    // axios.post('URI', target.files[0])
    // .then(res => {
    //     console.log('file uploadres', res);
    //     setUploaded(true);
    // })
    // .catch();
}

  return (
    <Box>
      <FormControlLabel sx={{color: 'white'}} control={<StyledInput 
           type='file' id={props.id} inputProps={{accept:"application/pdf, application/doc, application/docx"}}
        onChange={handleChange}
         >{isUploaded && <span>v</span>} 
          {props.label}
          <AttachFileIcon />
          
         </StyledInput>} label="Label" />



        {/* <span>{props.label}</span> */}
        {/* <Button type="file">
         
          </Button> */}
        
    </Box >
  );
}


export default UploaderField;

export const StyledInput = withStyles((theme)=>({
  root:{
      
      display:"none"
  }
  }))(Input)