import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Logo from "../media/Logo.png";
import  "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { authorization } from './Store/ContextApi';
import { useContext,useState,useEffect } from 'react';

function ColorSchemesExample() {
  const {LoginCredential,setLoginCredential }=useContext(authorization);
  const [isA, setisA] = useState(LoginCredential.isAuthrized)
  const Navigate=useNavigate();  
  useEffect(() => {
    setisA(LoginCredential.isAuthrized)

  }, [LoginCredential.isAuthrized])
  return (
    <>
      <Navbar bg="light"  className='nav' variant="light">
        <div className="logo" onClick={()=>{Navigate("/")}}>
            
        </div>
        <Container>
          <Nav style={{ width: '150%' }} className="me-auto flex ">
            <li onClick={()=>{Navigate("/")}} className="label">Home</li>
            <li className="label">Service</li>
            <li className="label">Top Deals</li>
            <li className="label">Gallery</li>
            <li className="label">Contact</li>
          </Nav>
          {!isA && <Link to={"/login"}><Button className="loginButton" style={{backgroundColor:"#211749",width:"120%",paddingBottom:"10px"}} className='label' >Login</Button></Link>
}
{isA && <Link onCLick={()=>{setLoginCredential({
  email:"",
  password:"",
  message:"",
  object:null,
  isAuthrized:false,

});Navigate("/login")}}  to={"/login"}><Button className="loginButton" style={{backgroundColor:"#211749",width:"120%",paddingBottom:"10px"}} >Logout</Button></Link>
}
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;