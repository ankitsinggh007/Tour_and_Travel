import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { authorization } from "../Components/Store/ContextApi";
import { doc, updateDoc } from "firebase/firestore";
import db from "../Database";
import { Alert } from 'reactstrap';

const ContactForm = () => {
  const {LoginCredential,setLoginCredential }=useContext(authorization);

  const [formStatus, setFormStatus] = React.useState('Send')
  
  const [Message, setMessage] = useState("");

  useEffect(() => { 
  setMessage(LoginCredential.message);
  }, [LoginCredential.message])
  const onSubmit = async(e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    if(LoginCredential.isAuthrized){
      const obj={
        ...LoginCredential,Contact:[...LoginCredential.Contact,conFom]
    }
    setLoginCredential({...obj})
    const washington=doc(db,"Contact","Message");
    await updateDoc(washington,{
        Contact:obj.Contact,
    })
    
    setFormStatus("Submited");

    }
    else{
      setMessage("please Log In")
    }
  }
  return (
    <div className="container w-50 mt-5 h-75">
      {/* <h2 className="mb-3">React Contact Form Component Example</h2> */}
      <form onSubmit={onSubmit} className="w-75 ">
      {Message != "" && <Alert color="danger">
                        {Message}
                    </Alert>}
        <div className="mb-4 w-100">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm