import React from 'react'
import classes from "./Gallery.module.css"
import Data from "../Components/Gallery";
import Slider from "../Components/SliderComponenet"
function Gallery() {
  
  console.log(Data);
    return (
    <div >
        <div style={{fontSize:"2rem",fontWeight:"600",textAlign:"center"}}>Gallery</div>
        <div className={classes.body}>
<Slider title="Cultural Activities" data={Data.slice(0,6)}/>
<Slider title="Tuk-Tuk" data={Data.slice(9,15)}/>
<Slider title="Day Trip" data={Data.slice(16,21)}/>
<Slider title="Religious Site" data={Data.slice(22,28)}/>
</div>
    </div>
  )
}

export default Gallery