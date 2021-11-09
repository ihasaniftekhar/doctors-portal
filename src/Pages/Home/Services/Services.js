import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'Flouride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis nostrum quos labore dolorum, corporis aliquid ullam non placeat repellendus",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis nostrum quos labore dolorum, corporis aliquid ullam non placeat repellendus",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis nostrum quos labore dolorum, corporis aliquid ullam non placeat repellendus",
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service} key={service.name}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;