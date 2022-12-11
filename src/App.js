import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "./Pages/Login";
import {app} from "./Database";
import { Route, Routes,useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home";
import { authorization } from "./Components/Store/ContextApi";
import { useState,useEffect } from "react";

function App() {
  const auth = getAuth();
  const NAVIGATE=useNavigate();
const [LoginCredential, setLoginCredential] = useState({
  firstName:"",
  lastName:"",
  PhoneNo:"",
  email:"",
  password:"",
  message:"",
  object:null,
  isAuthrized:false,

})
const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, LoginCredential.email, LoginCredential.password)
    .then((userCredential) => {
      const user = userCredential.user;
      setLoginCredential({...LoginCredential,isAuthrized:true});
      NAVIGATE("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"err");
      setLoginCredential({...LoginCredential,message:errorCode.split("/")[1]})

    });
  
}
const googleSignIn=()=>{
const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  
  const user = result.user;
  console.log(user,"user");
  setLoginCredential({...LoginCredential,isAuthrized:true});
  NAVIGATE("/");

  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.customData.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(credential,errorMessage,"hjgjghgjhgjg")
});
}
const createUser=()=>{
  createUserWithEmailAndPassword(auth, LoginCredential.email, LoginCredential.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user,"user");
      setLoginCredential({...LoginCredential,isAuthrized:false});
      NAVIGATE("/login");

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage,"error");
      setLoginCredential({...LoginCredential,message:errorCode.split("/")[1]})

  }); 
}
 
 
  return (
    <>
    <authorization.Provider value={{LoginCredential,googleSignIn,setLoginCredential,verifyCredential,createUser}}>
    <Navbar/>
      <Routes>
        <Route exact path="/"element={<Home/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      </authorization.Provider>
      </>
  );
}

export default App;
