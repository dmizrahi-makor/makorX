import { Container, FormControlLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { formDataActions } from "../store/formDataSlice";
import { withStyles } from "@mui/styles";

const UploaderField = (props) => {
  const state = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const [isUploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = ({ target }) => {
    const file = target.files[0];
    if (file) {
      const { name, type } = file;
      if (
        type.includes("image") ||
        type.includes("text") ||
        type.includes("pdf")
      ) {
        const fileData = new FormData().append("file", file);

        axios
          .put(
            `http://192.168.1.156:3030/api/file/289334a4-50f3-11ec-be49-d08e7912923c/${target.id}`,
            fileData
          )
          .then((res) => {
            console.log("file uploadres", res);
            if (res.status === 200 && res.data.file_name) {
              dispatch(
                formDataActions.fileUpload({
                  id: props.id,
                  value: name,
                })
              );

              setUploaded(true);
              setFileName(name);
            }
          })
          .catch((err) => {
            console.log("érror in uploading file", err);
          });
      }
    }
  };

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

      {/* <span>{props.label}</span> */}
      {/* <Button type="file">
         
          </Button> */}
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
