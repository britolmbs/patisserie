import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material';

const About = () => {
    return (
        <Container id="about" style={{ padding: '2rem 0' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sobre Nós
            </Typography>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Avatar
                        alt="Sua Foto"
                        src="assets/images/image.jpg"
                        sx={{ width: 200, height: 200 }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium dictum placerat. 
                        Etiam ac ipsum id nibh convallis consectetur at vitae mauris. Pellentesque quam libero, 
                        tincidunt quis ipsum at, placerat pharetra mauris. Quisque et mi velit. Nullam placerat 
                        massa at velit auctor aliquet. Morbi vel fermentum quam. Aenean vel est tortor.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
