import { createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "./Pages/Login";
import {app} from "./Database";
import { Route, Routes,useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar"
import { collection, addDoc,getDoc } from "firebase/firestore";  

import Home from "./Components/Home";
import Places from "./Pages/Places";
import { authorization } from "./Components/Store/ContextApi";
import { useState,useEffect } from "react";
import { query, where,getDocs } from "firebase/firestore";

import Gallery from "./Pages/Gallery";
import "slick-carousel/slick/slick.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Pages/Contact";
import Hotels from "./Pages/Hotels";
import Form from "./Pages/Form"; 
import DataBase from "./Database";

function App() {
  const auth = getAuth();
  const Navigate=useNavigate();

const [LoginCredential, setLoginCredential] =  useState({id:"",firstName:"",firstName:"",email:"",Contact:[],isAuthrized:false,Cart:[],message:null});










//  Fetch Data
const FetchData= async (email)=>{
  console.log(email,"email")
  const citiesRef = collection(DataBase, "User");
  const q = query(citiesRef, where("email", "==", `${email}`));
  console.log(q,"q");
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot,"querySnapshot")
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setLoginCredential({...LoginCredential,...doc.data(),isAuthrized:true,id:doc.id});
  });
}
// Creat user in DataBase
   const CreateUserInDataBase = async ()=>{
    const DocRef= await addDoc(collection(DataBase,"User"),{
    email:LoginCredential.email,
    firstName:LoginCredential.firstName,
    lastName:LoginCredential.firstName,
    Cart:LoginCredential.Cart
  
  }); 
  Navigate("/login")
 }






const verifyCredential=async()=>{
  console.log("i am in verifyCredential")
   const res= await signInWithEmailAndPassword(auth, LoginCredential.email, LoginCredential.password)
    .then((userCredential) => {
      const user = userCredential.user;
      // setLoginCredential({...LoginCredential,isAuthrized:true});
      FetchData(user.email);

      Navigate("/");
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
  Navigate("/");

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
      CreateUserInDataBase();
      

      // setLoginCredential({...LoginCredential,isAuthrized:false});
      // NAVIGATE("/login");

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
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Places" element={<Places/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/places/:site" element={<Hotels />}/>
        <Route path="/places/:site/:id" element={<Form />}/>
      </Routes>
      </authorization.Provider>
      </>
  );
}

export default App;
