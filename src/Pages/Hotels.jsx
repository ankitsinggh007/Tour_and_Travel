import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Hotel from "../Components/Hotel";
import Product from "../Components/Product"
import classes from "./Hotels.module.css"
function Hotels() {
    const [Data, setData] = useState([]);
    const {site}=useParams();
   const value= site.replaceAll(" ","_");
    const array=Hotel[value];
    console.log(value)

  return (
    <div>
        <div className={classes.place}>{site}</div>
        <div className={classes.container}>
            {
                array.length!==0 && 
                array.map(obj=>{
                    return(
                        <Product data={obj}/>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Hotels