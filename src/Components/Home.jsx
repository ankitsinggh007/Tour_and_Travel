import { Typography } from '@mui/material';
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import { Link, NavLink } from 'react-router-dom';
import classes from "./Home.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Grid,Button} from "@mui/material"
import Site1 from "../media/Site1.jpg"
import Site2 from "../media/Site2.jpg"
import Site3 from "../media/Site3.jpg"
import tripGuid from "../media/tripGuid.svg"
import Connected from "../media/Connected .png"
import Private from "../media/Private.png"
import Help from "../media/Help.png"
import Adventure from "../media/Adventure.png"
import Beach from "../media/Beach.png"
import Citytour from "../media/Citytour.png"
import Cruise from "../media/Cruise.png"
import Museums from "../media/Museums.png"
import Wildlife from "../media/Wildlife.png"
import Slider from "../Components/Slider"
import Footer from './Footer';
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
      Name:"Sri Bhoga Nandishwara",
      Location:"SH 74,Nandi,Karnatka",
      Date:"oct 28 2022",
      duration:"10 days"
    
    },
  ];
  const whyWeAreBetter=[{
    image:Connected,
    title:"We make all process easy",
    caption:"Our services include helping with booking hotels, arranging local transportation, and providing travel insurance."
  },
{
  image:Private,
  title:"Private & Customized Tour",
  caption:"provide the opportunity to ask questions and receive answers from knowledgeable guides,to learn about culture,history of the area."
},
{
  image:Help,
  title:"Immigration & Passport Help",
  caption:" Travel agents will be provide for assistance with immigration and passport help."
}];
const touType=[{
  logo:Beach,
  name:"Beach"
},
{
  logo:Citytour,
  name:"City tour"
},{
  logo:Wildlife,
  name:"Wildlife"
},{
  logo:Adventure,
  name:"Adventure"
},{
  logo:Cruise,
  name:"Cruises"
},];

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
    <Typography gutterBottom   ><NavLink className={classes.link} to={"/Places"}>See All Tours</NavLink></Typography>
    </div>
    <Grid container direction="row" spacing={10} style={{paddingLeft:"5vw",paddingRight:"5vw",paddingBottom:"10vh"}} >
   {data.map((obj,index)=>{
    console.log(obj,"obj")
    return(
      <Grid item xs={12} sm={6} md={4}  >
      <Card variant="outlined" >
        <CardMedia
          component="img"
          height="400"
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
        </CardActions>
      </Card>
      </Grid>
    )
   })}
    </Grid>
    <Grid container style={{marginLeft:"5vw",marginRight:"5vw", width:"90vw", height:"auto" }}>
    <Grid item    sm={12} md={6} >
      <img src={tripGuid} alt="story telling"  />
      
    </Grid>
    <Grid item sm={12} md={6} style={{ height:"100%", display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"65px"}} >
      <Typography variant='h2' align="centre" color="#211749" gutterBottom >Why Choose Us?</Typography>
      <Typography variant='subtitle1' align="centre" style={{width:"52%"}} gutterBottom  >We offer a wide range of tour packages to suit your needs, from budget-friendly trips to luxury holidays</Typography>
      {whyWeAreBetter.map((obj,inedx)=>{
        return(
          <Grid container style={{ width:"85%",marginLeft:"5vw", marginTop:"17px", marginBottom:"17px" } }  >
        <Grid item sm={2} md={2}>
          <img src={obj.image} alt="Connected _logo" height="90px"/>
        </Grid>
        <Grid item sm={8} md={8}>
          <Typography variant='h5' >{obj.title}</Typography>
          <Typography variant='subtitle'>{obj.caption}</Typography>
        </Grid>
        </Grid>
        )

      })}  
    </Grid>
    </Grid>
    <Grid  style={{marginLeft:"5vw",marginRight:"5vw", width:"90vw" ,paddingBottom:"50px"}}>
    <Typography variant='h2' align='center' style={{marginTop:"15px"}}>Tour Type</Typography>

    <div className={classes.container_types}>
      {touType.map((obj,index)=>{
        return(
          <div style={{height:"120px",width:"120px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"} }>
            <div >
              <img src={obj.logo} alt="Logo" height="120" width="120px"/>
            </div>
            <Typography align="center" variant='h6'>{obj.name}</Typography>
          </div>
        )
      })}
    </div>
    </Grid>
    <Typography align="center" variant="h2" style={{marginTop:"20px"}}  >What Our Customer Say's About Us</Typography>
    <Grid style={{marginTop:"150px"}}>

    <Slider/>
    </Grid>
    <Grid className={classes.Subscription} style={{height:"70vh"}}>
    <Typography variant='h1' align="center" gutterBottom>Save Time,Save Money!</Typography>
    <Typography variant='subtitle1' align="center" gutterBottom style={{marginBottom:"10px",fontWeight:"bold" }}>subsbcribe to our site for amazing deals!</Typography>
    <div style={{display:"flex", justifyContent:"center" }}><TextField id="outlined-basic" label="Email"  style={{width:"40%",borderRadius:"10px",backgroundColor:"white"}} variant="outlined" /><Button variant="contained" style={{fontSize:"1.4rem",backgroundColor:"#211749",borderRadius:"10px",marginLeft:"15px" }} >Subscribe</Button></div>
    </Grid>
      <Footer/>

  </>
  )
}

export default Home