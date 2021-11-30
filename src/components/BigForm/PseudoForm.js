import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DispatcherField from "./DispatcherField";
import { formData } from "../../utils/formData";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import CountryAutoComplete from "../CountryAutoComplete";

const steps = [
  "Submit on-boarding documentation",
  "Attach documents",
  "Terms of Use",
];
const PseudoForm = ({ step }) => {
  const formState = useSelector((state) => state.formData);

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container>
          {formData.form1.grid1.map(({ label, id }) => (
            <Grid item xs={6}>
              <DispatcherField value={formState[id]} id={id} label={label} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <CountryAutoComplete />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {formData.form1.grid2.map(({ label, id }) => (
          <DispatcherField value={formState[id]} id={id} label={label} />
        ))}
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {formData.form1.grid3.map(({ label, id }) => (
            <Grid item xs={6}>
              <DispatcherField
                value={formState[id]}
                multiline
                maxRows={9}
                rows={9}
                id={id}
                label={label}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PseudoForm;

export const StyledHeaderTableCell = withStyles((theme) => ({
  root: {
    border: "solid #5f3c2b",
    color: "#6d6d6d",
    marginTop: "20px",
  },
}))(TextField);
