import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from './Styles';



export default function InfoCard({ song }) {
  const {
    artistName,
    collectionName,
    trackName,
    trackPrice,
    trackTimeMillis,
    artworkUrl100,
  } = song;

  const classes = useStyles();

  const millisToMinutesAndSeconds=(millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" >
            {trackName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" >
            {artistName}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {collectionName}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary">
                Duration: {millisToMinutesAndSeconds(trackTimeMillis)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="textSecondary">
                Price: ${trackPrice}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={artworkUrl100}
        title={collectionName}
      />
    </Card>
  );
}
