import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../../Shared/Navigation/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;