import classes from "./Form.module.css"
import React from 'react'
import Hotel from "../Components/Hotel"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect,useContext } from "react";
import { authorization } from "../Components/Store/ContextApi";
import { doc, updateDoc } from "firebase/firestore";
import db from "../Database";

function FormDisabledExample() {
  const {LoginCredential,setLoginCredential }=useContext(authorization);
   
    const {site,id}=useParams();
    const place=site.replaceAll(" ","_");
    let array=Hotel[place];
array=array.filter(obj=>obj.id==id);
    const [Booking, setBooking] = useState({
        place:array[0].Title,
        checkin:"",
        checkout:"",
        phone:"",
        
    })
    const [Disabled, setDisabled] = useState(true);
    const [BookNowState, setBookNowState] = useState("BOOK NOW")
    useEffect(() => {
      if(Booking.place!="" && Booking.checkin!="" && Booking.checkout!=""&& Booking.phone.length==10){
        setDisabled(false);
      }
      else{
        setDisabled(true);
      }
    

    }, [Booking])

  const BookNow=async(e)=>{
    e.preventDefault();
   if(LoginCredential.isAuthrized){
    setBookNowState("BOOKING...");

    const obj={
        ...LoginCredential,Cart:[...LoginCredential.Cart,Booking]
    }
    setLoginCredential({...obj})
    const washington=doc(db,"User",LoginCredential.id);
    await updateDoc(washington,{
        Cart:obj.Cart,
    })
    setBookNowState("BOOKED");
    setBooking({
        place:"",
        checkin:"",
        checkout:"",
        phone:"",  });
  }
   }

console.log(array)
console.log(Booking)
console.log(Disabled)


  return (
   <div >
     <Form className={classes.root}>
    <div>
        <label className={classes.label}>Place</label>
        <input type="text" className={classes.check} value={Booking.place} style={{width:"100%"}} disabled/>
    </div>
      <div className={classes.Duration}>
    <div>
    <label className={classes.label}>CHECK IN</label>
      <input type="date"
      value={Booking.checkin}
      onChange={(e)=>setBooking({...Booking,checkin:e.target.value}) }

      className={classes.check}></input>
    </div>
      <div><label className={classes.label}>CHECK OUT</label>
      <input type="date"
      value={Booking.checkout}
      onChange={(e)=>setBooking({...Booking,checkout:e.target.value}) }
      className={classes.check}></input></div>
      </div>
      <label className={classes.label}>PHONE NO</label>
      <input type="phone"
      value={Booking.phone}
      onChange={(e)=>setBooking({...Booking,phone:e.target.value}) }
      className={classes.check}></input>
      <Button className={Disabled?`${classes.Disabled}`:`${classes.submit}`} 
      onClick={ BookNow   }
      disabled={Disabled}
      
      type="submit" placeholder="Phone">{BookNowState}</Button>

    </Form>
   </div>
  );
}

export default FormDisabledExample;