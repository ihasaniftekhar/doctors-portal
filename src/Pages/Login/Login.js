import React from 'react';
import login from '../../images/login.png'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const Login = () => {

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
    }

    const handleLoginSubmit = (e) => {
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
                    </form>

                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;