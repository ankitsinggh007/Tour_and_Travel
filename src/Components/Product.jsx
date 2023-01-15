import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import classes from "./Product.module.css"
function Product({data}) {
    console.log(data)
  return (
    <div className={classes.box}>
        {/* <img src={data.image} width="300px" height="300px"/> */}
        <div className={classes.image} style={{backgroundImage:`url(${data.image})`}}></div>
        <span className={classes.title}>{data.Title}</span>
        <span className={classes.price}>{data.Price}/- per person</span>
        <span className={classes.duartion}>{data?.duartion}</span>
        <Link to={data.id}className={classes.action} >Book now</Link>
    </div>
  )
}

export default Product