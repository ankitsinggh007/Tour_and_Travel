import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Places.module.css"
import Carousel from "../Components/Carousal"
import Card from "../Components/Card"
function Places() {
const Places=[{
  id:1,
  image:"https://www.nishantratnakar.com/wp-content/gallery/pete-walk/Bangalore-Pete-Photo-Walk-0009.jpg",
  title:"Old Banglore",
  description:"Old Bangalore, also known as Bengaluru Pete, refers to the historic core of the city of Bangalore, India. It is characterized by its traditional architecture, temples, markets, and narrow streets. It is a popular tourist destination and is known for its rich cultural heritage and history.",
  link:"",
},

{
  id:"3",
  image:"https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Wildlife-Sanctuaries-In-India1.jpg",
  title:"Wild Life",
  description:"Bangalore is known for its rich biodiversity and is home to a variety of wildlife. The city is surrounded by national parks and sanctuaries such as the Bannerghatta National Park, which is home to a wide range of animals such as elephants, leopards, and a variety of birds.",
  link:""
},{

  id:"4",
  image:"https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-234.jpg",
  title:"Historical Site",
  description:"Bangalore has a rich cultural and historical heritage and is home to many historical sites. Some of the notable historical sites include Tipu Sultan's Summer Palace, which is an 18th-century architectural masterpiece and a testimony of the city's rich history. ",
  link:""
},
{
  id:"5",
  image:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/09/07081644/Untitled-design-13-1600x900.jpg",
  title:"Best Place To Eat",
  description:"Bangalore is known for its diverse and delicious food scene. The city offers a wide range of cuisines from traditional South Indian dishes like Dosa, Idli and Vada to international options like Chinese, Italian and Mexican.",
  link:""
},];
  return (
    <div className={classes.Container}>
     {
      Places.map((obj,index)=>{
        return(
          <Card data={obj} key={index}/>
        )
      })
     }
    </div>
  )
}

export default Places