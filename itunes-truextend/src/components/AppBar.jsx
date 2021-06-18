import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
}
}));



export default function SearchAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    }); 
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            iTunes-Store
          </Typography>
          <TextField id="text-filled" label="Artist, Album, Gender, ..." variant="outlined"  size='small' color="primary" style={{ marginRight: '5px'}}/>
                <FormControl variant="outlined" className={classes.formControl} size='small' style={{ marginRight: '10px'}} color='primary'>
                    <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
                        <Select
                            native
                            value={state.select}
                            onChange={handleChange}
                            label="Select"
                            inputProps={{
                            name: 'select',
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
                <Button variant="contained" size="large" className={classes.margin} style={{ marginRight: '5px'}} color="primary" >
                    Buscar
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
