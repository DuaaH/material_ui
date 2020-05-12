import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function Movies({ movie }) {
  return (
    <Grid item xs={12} >
      <Card>
        <CardMedia style={{ height: "150px" }} image={movie.Poster} alt={movie.Title} />
        <CardContent>
          <Typography variant="body2" component="p">
            {movie.Title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}