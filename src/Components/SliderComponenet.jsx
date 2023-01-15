import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./SliderComponenet.module.css"

 const fun=(props)=>{
  
  
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    console.log(props.data)
    return (
      <div>
        <h2 style={{color:"white",marginLeft:"90px"}}>{props.title}</h2>
        <Slider {...settings}  style={{ border: "1px solid black",width:"85%",margin: "auto"}}>
         {props.data.map((obj,index)=>{ 
            
            return(<div className={classes.box}>
            <img src={obj.image} height="200px" width="300px"/>
            <span className={classes.caption} >{obj.caption}</span>
          </div>)})}
        </Slider>
      </div>
    );
  }
  export default fun;
