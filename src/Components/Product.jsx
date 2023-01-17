import { Button,  } from 'reactstrap'
import { Link,NavLink } from 'react-router-dom'
import React from 'react'
import classes from "./Product.module.css"
import {FaSwimmer} from "react-icons/fa"
import {IoLogoGameControllerB} from "react-icons/io"
import {MdLunchDining} from "react-icons/md"
import {GiLoveMystery} from "react-icons/gi"
import {FaRupeeSign} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {IoTicketSharp} from "react-icons/io5"
import {TiTick} from "react-icons/ti"
import {BsWifi2} from "react-icons/bs"
function Product({data}) {
    console.log(data)
  return (
    <div className={classes.box}>
        {/* <img src={data.image} width="300px" height="300px"/> */}
        <div className={classes.image} style={{backgroundImage:`url(${data.image})`}}></div>
        <span className={classes.title}>{data.Title}</span>
      <div className={classes.facility}>
      {data?.Property?.includes("wifi") &&<span className={classes.icon}><BsWifi2 fontSize={".8rem"}/>wifi available</span> }
    {data?.duartion&&  <span className={classes.duartion}><BiTimeFive style={{marginBottom:"3px"}}/> {data?.duartion}</span>}
       {data?.duartion && <span><IoTicketSharp/>Ticket include</span>}
     {data?.option?.includes("vegan") && <span><TiTick/> vegan </span>}  
     {data?.option?.includes("non-vegetarian") && <span><TiTick/> non-vegetarian </span>}  
     {data?.option?.includes("vegetarian") && <span><TiTick/> vegetarian </span>}  
{data?.Property?.includes("Pool") &&<span className={classes.icon}><FaSwimmer className={classes.icons} fontSize={".8rem"}/>Swimming</span> }
{data?.Property?.includes("Gaming room") &&<span className={classes.icon}><IoLogoGameControllerB className={classes.icons} fontSize={".8rem"}/>Gaming Room</span> }
{data?.Property?.includes("Lunch free") &&<span className={classes.icon}><MdLunchDining className={classes.icons} fontSize={".8rem"}/>Lunch included</span> }
{data?.Property?.includes("Couple friendly") &&<span className={classes.icon}><GiLoveMystery className={classes.icons} fontSize={".8rem"}/>Couple friendly</span> }

      </div>
        <span className={classes.price}><FaRupeeSign/>{data.Price}/- per person</span>
        <NavLink to={data.id}className={classes.action} >Book now</NavLink>
    </div>
  )
}

export default Product