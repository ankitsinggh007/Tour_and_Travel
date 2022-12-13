import { Typography } from '@mui/material';
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
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
      Price:"10,000",
      Name:"Vidhana Soudha",
      Location:"Sampangi Rama Nagara,Bangaluru,Karnatka",
      Date:"oct 28 2022",
      duration:"5 days"
    },
    {
      image:Site2,
      alt:"",
      Price:"7,000",
      Name:"BanglorePalace",
      Location:"Vasanth Nagar,Bangaluru,Karnatka",
      Date:"oct 28 2022",
      duration:"7 days"

    
    },
    {
      image:Site3,
      alt:"",
      Price:"12,000",
      Name:"Sri Bhoga Nandishwara Gudi",
      Location:"SH 74,Nandi,Karnatka",
      Date:"oct 28 2022",
      duration:"10 days"
    
    },
  ];
  return (
    <>
    <div className={classes.homeSection} >
      <div className={classes.home}></div>
    <div className={classes.home2}></div>
    <div className={classes.home3}></div>
    </div>
   <div className={classes.container1} >
    <div><Typography variant='h2' className={classes.subtitle}>Our Best Tour</Typography>
    <Typography variant='subtitle1'  className={classes.subtitle1}>There are also locations where it's easy to feel healthier,happier <br/> and less stressed then daily chaos. And to more destinations on <br/> the Global Retirement index.</Typography>
   </div>
    <Typography gutterBottom   align="right"><NavLink className={classes.link} to={"/"}>See All Tours</NavLink></Typography>
    </div>
    <Grid container direction="row" spacing={10} style={{paddingLeft:"5vw",paddingRight:"5vw",paddingBottom:"10vh"}} >
   {data.map((obj,index)=>{
    console.log(obj,"obj")
    return(
      <Grid item xs={12} sm={6} md={4}  >
      <Card variant="outlined" >
        <CardMedia
          component="img"
          height="250"
          image={obj.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#a094b7">
            {obj.Price}₹/day
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="#211749">
              {obj.Name}
          </Typography>
          <LocationOnOutlinedIcon/>
              {obj.Name}
              <br/>
              <br/>
              <span style={{marginRight:"25px"}}><CalendarMonthOutlinedIcon/>{obj.Date}</span>
              <span><TimelapseOutlinedIcon style={{marginRight:"10px"}}/>{obj.duration}</span>
        </CardContent>
        <CardActions style={{display:"inline"}}>
          <Button  style={{ display:"inline",backgroundColor:"#211749",color:"white",borderRadius:"6rem",padding:"0.5rem",position:"relative",left:"75%"}}>Book Now</Button>
        </CardActions>
      </Card>
      </Grid>
    )
   })}
    </Grid>
    <Grid container>

    </Grid>
  </>
  )
}

export default Home