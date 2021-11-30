import { Box } from "@mui/system";
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import checkBox from "../../utils/checkBox";
import { CheckBox } from "@mui/icons-material";

const TermsForm = ()=>{
    return <Box>
        <Typography variant = "h4">Terms of Use</Typography>
        <Box sx={{border:"1px solid #5f3c2b "}}>
            here should come the terms of use 
        </Box>
        <Grid container  sx = {{border:"1px solid #5f3c2b "}}>
            <Typography variant ="h6" >Would you like to use our electronic trading platform and services?
</Typography>
            <Grid item xs = {6}>
                <Button>Yes</Button>
            </Grid>
            <Grid item xs = {6}><Button>No</Button></Grid>
        </Grid>
      
    </Box>

}
export default TermsForm;