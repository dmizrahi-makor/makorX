import { FormControlLabel } from "@material-ui/core";
import { Box, Input,Typography } from "@material-ui/core";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../store/formDataSlice";
import { withStyles } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';

const UploaderField = (props) => {
  const state = useSelector(state => state.formData.fullData);
  const dispatch = useDispatch();
  const [isUploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");



  const handleChange = async ({target}) => {
    if (target.files[0]) {
      const formData = new FormData()
      formData.append('file', target.files[0])
      const fileType = target.files[0].type;
      console.log(target.files[0])
      console.log(fileType)
      if (fileType.includes("image") || fileType.includes("text") || fileType.includes("pdf")) {
        console.log(target.id);
          await axios.post(`http://10.0.0.197:3030/api/file/289334a4-50f3-11ec-be49-d08e7912923c/${target.id}`, formData).then((res) => {
   
            console.log(res)
            dispatch(
              formDataActions.fileUpload({ id: props.id, value: target.files[0] 
              }))
              setUploaded(true);
              setFileName(target.files[0].name);

            
          
        }).catch((error) => {
          console.log(error)
        })
      }
      }
     
  }


  


  return (
    <Box>
      <FormControlLabel
        sx={{ color: "white" }}
        control={
          <StyledInput
            type="file"
            id={props.id}
            inputProps={{
              accept: "application/pdf, application/doc, application/docx",
            }}
            onChange={handleChange}
          >
            {isUploaded && <span>v</span>}
            {props.label}
          </StyledInput>
        }
        label={
          <Box>
            {/* {isUploaded && <span>v</span>}  */}
            {props.label}
 
            <AttachFileIcon />
          </Box>
        }
      />
      {isUploaded && (
        <Typography>
          <CheckIcon />
          {fileName}
        </Typography>
      )}
    </Box>
  );
};
 
export default UploaderField;
 
export const StyledInput = withStyles((theme) => ({
  root: {
    display: "none",
  },
}))(Input);
 