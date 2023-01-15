import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Logo from "../media/Logo.png";
import  "./Navbar.css";
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { authorization } from './Store/ContextApi';
import { useContext,useState,useEffect } from 'react';

function ColorSchemesExample() {
  const {LoginCredential,setLoginCredential }=useContext(authorization);
  const [isA, setisA] = useState(LoginCredential.isAuthrized)
  const Navigate=useNavigate();  
  useEffect(() => {
    setisA(LoginCredential.isAuthrized)

  }, [LoginCredential.isAuthrized])
  const LoggedIn=()=>{
    if(LoginCredential.isAuthrized){
      setLoginCredential({
        id:"",firstName:"",firstName:"",email:"",isAuthrized:false,Cart:[]
      })
      Navigate("/")

    }
    else{
      Navigate("/login")
    }
  }
  return (
    <>
      <Navbar bg="light"  className='nav' variant="light">
        <div className="logo" onClick={()=>{Navigate("/")}}>
            
        </div> 
        <Container>
          <Nav style={{ width: '150%' }} className="me-auto flex ">
            <NavLink to={"/Places"}activeClassName="ative" className="label">Places</NavLink>
            <NavLink to='/Gallery' className="label">Gallery</NavLink>
            <NavLink to="/Contact" className="label">Contact</NavLink>
          </Nav>
    <Button className="loginButton" onClick={LoggedIn} style={{backgroundColor:"#211749",width:"130px",marginRight:"60px",paddingBottom:"10px"}} className='label' >{LoginCredential.isAuthrized?"Log Out":"Sign In"}</Button>

        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;