import React, { useState } from 'react';
import login from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{ mt: 8 }}>

                    <Typography variant="body1" gutterBottom>
                        Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            required
                            sx={{ width: '.75', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                        />
                        <TextField
                            required
                            sx={{ width: '.75', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                        />
                        <Button sx={{ width: '.75', m: 1 }} type="submit" variant="contained">Log In</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }}
                        >
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    <p>--------------------------------------</p>

                    <Button variant="contained" onClick={() => signInWithGoogle(location, history)}>Google Sign In</Button>
                    <br />
                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">Logged in Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;