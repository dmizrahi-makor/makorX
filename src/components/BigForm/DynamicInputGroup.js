import { Box } from "@mui/system";
import _ from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";

import UploaderField from "./UploaderField";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, makeStyles } from "@mui/styles";
import axios from "axios";
import { useStyles } from "../../styles";

function DynamicInputGroup() {
  const state = useSelector((state) => state.formData);
  const [inputIDs, setInputIDs] = useState([`extra-file-1`]);
  const handleAdd = () => {
    setInputIDs((prev) => [`extra-file-${prev.length}`, ...prev]);
  };
  const pointerClass = useStyles().pointer;

  const deleteField = (id) => {
    axios
      .delete("url", {
        fileId: id,
      })
      .then((res) => {
        ////////TAKE CARE OF DELETING LOCALLY
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      {inputIDs.map((id) => {
        return (
          <Box>
            <UploaderField id={id} label={"a random label for now"} />
            <DeleteIcon
              className={pointerClass}
              onClick={() => deleteField(id)}
            />
          </Box>
        );
      })}
      <Box onClick={handleAdd}>
        <AddIcon className={pointerClass} />
      </Box>
    </Box>
  );
}

export default DynamicInputGroup;

// pathname for file backend api /api/file/id/f_....
