import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkMui from '@mui/material/Link';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from 'reactstrap';
import { authorization } from '../Components/Store/ContextApi';
import { useContext,useEffect } from 'react';
import { FcGoogle } from "react-icons/fc"
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
    const { LoginCredential, setLoginCredential ,verifyCredential,googleSignIn} = useContext(authorization);

    const [Message, setMessage] = useState("");

useEffect(() => {
setMessage(LoginCredential.message);
}, [LoginCredential.message])

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

        if (emailRegex.test(LoginCredential.email)) {
            if (LoginCredential.password !== "") {
                
                
                verifyCredential();
                
            }
            else {
                setMessage("Password can't be null");
            }
        }
        else {
            setMessage("email is wrong")
        }
    };
    const signinwith_Google=()=>{
        googleSignIn();
    }

    return (
        <Container style={{ position: "absolute", top: "25%", left: "40%", paddingBottom: "20px", paddingTop: "20px", borderRadius: "1rem", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }} component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Typography  component="h6" color={"red"} variant="h6" >{Message}</Typography>
                    {Message != "" && <Alert color="danger">
                        {Message}
                    </Alert>}
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                type="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setLoginCredential({ ...LoginCredential, [e.target.id]: e.target.value })}

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
                                onChange={(e) => setLoginCredential({ ...LoginCredential, [e.target.id]: e.target.value })}

                            />
                        </Grid>
                       
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to={"/Signup"}> <LinkMui to={"/login"} variant="body2">
                                New to the site? Sign up
                            </LinkMui></Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}