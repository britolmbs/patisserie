import React from 'react';
import { Container, Grid, Typography, Avatar } from '@mui/material';
import avatar from '../assets/images/avatar.png'; // Ajuste o caminho conforme necessário

const About = () => {
    return (
        <Container id="about" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sobre Nós
            </Typography>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                    <Avatar
                        alt="Minha Foto"
                        src={avatar}
                        sx={{ width: 200, height: 200, borderRadius: '50%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1">
                    Olá! Meu nome é Nathalia e sou estudante de Química na Universidade Rural do Rio de Janeiro. Resido em Itaguaí e descobri minha paixão pela confeitaria durante a pandemia, momento em que me reinventei. Desde então, venho me aperfeiçoando a cada dia, dedicando-me à criação de bolos, brownies e docinhos personalizados, todos feitos sob encomenda. Estou animada para compartilhar meu amor pela patisserie com você!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
