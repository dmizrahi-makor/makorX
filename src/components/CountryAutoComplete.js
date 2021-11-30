import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from '../utils/countries';
import { withStyles } from '@mui/styles';

const CountryAutoComplete = ()=> {
  return (
    <StyledAutoComplete
      id="country-select-demo"
      fullWidth
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
export default CountryAutoComplete;

export const StyledAutoComplete = withStyles((theme)=>({
    root:{
      
        border:"solid #5f3c2b",
        color:"#6d6d6d",
        marginTop:"20px",
    },
    paper:{
        backgroundColor:"#001333",
        color:"white"
    }
    }))(Autocomplete)