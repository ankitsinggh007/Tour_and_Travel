import {Alert} from "reactstrap"
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import {Link} from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { authorization } from "../Components/Store/ContextApi";
import {useContext,useEffect} from "react";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Tour and Travel
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const {LoginCredential,setLoginCredential,createUser}=useContext(authorization);
  
  const [Message, setMessage] = useState("")
  useEffect(() => {
    setMessage(LoginCredential.message);
    }, [LoginCredential.message])
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    if(LoginCredential.firstName){
      if(LoginCredential.lastName){
        if(emailRegex.test(LoginCredential.email)){
          if(LoginCredential.password===""&&LoginCredential.Re_entered_password===""){
            setMessage("Password can't be null");
          }
          else if(LoginCredential.password===LoginCredential.Re_entered_password){
            createUser();
          }
          else if(LoginCredential.password!==LoginCredential.Re_entered_password){
            setMessage("Password is not matched")
          }
          
        }
        else{
          setMessage("incorret email");
        }
      }
      else{
        setMessage("last name can't be null*");
      }
      
    }
    else{
      setMessage("first name can't be null*");
      
    }


  };

  return (
      <Container  component="main"  style={{ paddingBottom:"20px",paddingTop:"20px", borderRadius:"1rem", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* <Typography  component="h6" color={"red"} variant="h6" >{Message}</Typography> */}
          {Message!="" && <Alert color="primary">
                {Message}
                </Alert>}
                
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>setLoginCredential({...LoginCredential,[e.target.id]:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>setLoginCredential({...LoginCredential,[e.target.id]:e.target.value})}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setLoginCredential({...LoginCredential,[e.target.id]:e.target.value})}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setLoginCredential({...LoginCredential,[e.target.id]:e.target.value})}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Re_entered_password"
                  label="Re-entered password"
                  type="password"
                  id="Re_entered_password"
                  autoComplete="Re_entered_password"
                  onChange={(e)=>setLoginCredential({...LoginCredential,[e.target.id]:e.target.value})}
                
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive hot deals and packages  via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               <Link to={"/login"}> <LinkMui to={"/login"} variant="body2">
                  Already have an account? Sign in
                </LinkMui></Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}