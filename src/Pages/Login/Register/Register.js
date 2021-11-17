import React, { useState } from 'react';
import login from '../../../images/login.png'
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match")
        }

        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6} sx={{ mt: 8 }}>

                    <Typography variant="body1" gutterBottom>
                        Register</Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                required
                                sx={{ width: '.75', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                required
                                sx={{ width: '.75', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                required
                                sx={{ width: '.75', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                required
                                sx={{ width: '.75', m: 1 }}
                                id="standard-basic"
                                label="ReType your Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                            />
                            <Button sx={{ width: '.75', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress color="success" />}
                    {user?.email && <Alert severity="success">User Created Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;