import React, { useState } from 'react';
import '../App.css';
import { Grid, Typography, TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles,  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    input: {
     '& > *': {
        margin: theme.spacing(1),
        width: '10ch',
       },
    },
    margin: {
        margin: theme.spacing(1),
    },
    divider: {
      height: 28,
      margin: 3,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function HomeView() {

 const classes = useStyles;
 const [state, setState] = useState(0);

 const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return (
      <Grid container alignContent='center' alignItems='center'>
          <Grid item xs={12} component="div" style={{ backgroundColor: '#E2E0DF', height: '50vh', textAlign: 'center', margin: '200px 50px 50px 50px'  }} >
                <Typography variant='h4' style={{ textAlign: 'center', marginTop: '125px', marginBottom: '10px'}}>iTunes-Store</Typography> 
                <TextField id="text-filled" label="Artist, Album, Gender, ..." variant="outlined"  size='small' color="primary" style={{ marginRight: '5px'}}/>
                <FormControl variant="outlined" className={classes.formControl} size='small' style={{ marginRight: '5px'}}>
                    <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            label="Age"
                            inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value='all'>All</option>
                            <option value='movie'>Movie</option>
                            <option value='podcast'>Podcast</option>
                            <option value='music'>Music</option>
                            <option value='ebook'>eBook</option>
                            <option value='musicVideo'>Music Video</option>
                        </Select>
                </FormControl>
                <Button variant="contained" size="large" className={classes.margin} style={{ marginRight: '5px'}} color="primary" onClick={() => {window.location.assign('/')}} >
                    Buscar
                </Button>
          </Grid>
      </Grid>
    );
}


