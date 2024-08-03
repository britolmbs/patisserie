import React from 'react';
import { Container, Grid, Typography, Avatar } from '@mui/material';
import avatar from '../assets/images/avatar.png'; // Ajuste o caminho conforme necessário

const About = () => {
    return (
        <Container id="about" style={{ padding: '2rem 0' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sobre Nós
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <Avatar
                        alt="Minha Foto"
                        src={avatar}
                        sx={{ width: 200, height: 200, margin: '0 auto', borderRadius: '50%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
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
