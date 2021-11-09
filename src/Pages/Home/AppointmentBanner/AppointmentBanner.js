import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 170,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(45,58,74)',
    backgroundBlendMode: 'darken,luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '400px', marginTop: -110 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'start', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#16F3B3' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 4 }} style={{ color: 'white', fontSize: '14px', fontWeight: '300' }}>
                            It's a long stablished fact that a reader will be distracted by the readable content of a page when looking at its
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#16F3B3' }}>Learn More  </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;