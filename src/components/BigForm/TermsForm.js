import { Box } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";


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