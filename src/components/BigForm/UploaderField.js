import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../store/formDataSlice";


const UploaderField = (props) => {
  const state = useSelector(state=>state.formData);
  const dispatch = useDispatch();
    const [isUploaded, setUploaded] = useState(false);
const handleChange = ({target}) => {

  dispatch(formDataActions.fileUpload({id:props.id,value:target.files[0]}))
    // axios.post('URI', target.files[0])
    // .then(res => {
    //     console.log('file uploadres', res);
    //     setUploaded(true);
    // })
    // .catch();
}
console.log(props.id)
  return (
    <Box>
        <span>{props.label}</span>
        <Input type='file' id={props.id} onChange={handleChange} >{isUploaded && <span>v</span>} </Input>
    </Box >
  );
}


export default UploaderField;
