import { Typography } from '@mui/material';
import React from 'react'
import classes from "./Home.module.css";
import Slider from "./Slider"
function Home() {
  return (
    <>
    <div className={classes.home}></div>
    <Typography variant='subtitle'>Places that are on trending</Typography>
    {/* <Slider/> */}
  </>
  )
}

export default Home