import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ textAlign: 'left', ...verticalCenter }}>
                    <Box>
                        <Typography variant="h3" >
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h3" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 200 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis nostrum quos labore dolorum, corporis aliquid ullam non placeat repellendus
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#16F3B3' }}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair}></img>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;