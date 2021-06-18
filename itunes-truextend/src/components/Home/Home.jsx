import React, { useState} from 'react';
import { Grid, Typography, TextField, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import useStyles from './Styles';
import InfoCard from '../card/Card'




const HomeView = () => {
    
 const classes = useStyles();
 const [select, setSelect] = useState('');
 const [text, setText] = useState('');
 const [itunesUrl, setItunesUrl] = useState([])

 async function itunesApiRequest(term, media = 'all') {
	const url = new URL('https://itunes.apple.com/search');
	const params = {
		term,
		media,
	};
	try {
		url.search = new URLSearchParams(params);
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
 const retriveItems= async () => {

    const response = await itunesApiRequest(text, select);
    setItunesUrl( response.results );	
 }

 const handleChange = (event) => {
    setSelect(event.target.value)
  };


  const textChange = (event) => {
      const textUrl= event.target.value.replace(' ', '+');
    setText(textUrl);
    
  };
  

  const renderCards = () => {
      return itunesUrl.map((item,index) => {
          return(
                <Grid item xs={12} sm={4} >
                    <InfoCard key={index+item.trackName} song={item}></InfoCard>
                </Grid> 
            )
        })
    } 
    return (
      <Grid container alignContent='center' alignItems='center' className={classes.styleHome} >
          <Grid item xs={12} component="div" className={classes.gridStyle}>
                <Typography variant='h4' className={classes.tyStyle}>iTunes-Store</Typography> 
                <TextField id="text-filled" label="Artist, Album, Gender, ..." variant="outlined"  size='small' color="primary" className={classes.spacingForm} onChange={textChange }/>
                <FormControl variant="outlined" className={classes.spacingForm} size='small'>
                    <InputLabel htmlFor="outlined-age-native-simple">Select</InputLabel>
                        <Select
                            native
                            value={select.name}
                            onChange={handleChange}
                            label="Name"
                            inputProps={{
                            name: 'name',
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
                <Button variant="contained" size="large" className={classes.margin} color="primary" onClick={() => retriveItems() }>
                    Buscar
                </Button>
          </Grid>
          {renderCards()}
      </Grid>
    
    );
}


export default HomeView;

