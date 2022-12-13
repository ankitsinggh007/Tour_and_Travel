import { Typography } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import classes from "./Home.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid,Button} from "@mui/material"
import Site1 from "../media/Site1.jpg"
import Site2 from "../media/Site2.jpg"
import Site3 from "../media/Site3.jpg"
function Home() {
  const data=[
    {
      image:Site1,
      alt:"",
    },
    {
      image:Site2,
      alt:"",
    },
    {
      image:Site3,
      alt:"",
    },
  ];
  return (
    <>
    <div className={classes.homeSection} >
      <div className={classes.home}></div>
    <div className={classes.home2}></div>
    <div className={classes.home3}></div>
    </div>
    <Typography variant='h2' className={classes.subtitle}>Our Best Tour</Typography>
    <Typography variant='subtitle1'  className={classes.subtitle1}>There are also locations where it's easy to feel healthier,happier <br/> and less stressed then daily chaos. And to more destinations on <br/> the Global Retirement index.</Typography>
    <Typography gutterBottom className={classes.link} align="right"><NavLink to={"/"}>See All Tours</NavLink></Typography>
    <Grid container>
   {data.map((obj,index)=>{
    console.log(obj,"obj")
    return(
      <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={obj.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Grid>
    )
   })}
    </Grid>
  </>
  )
}

export default Home