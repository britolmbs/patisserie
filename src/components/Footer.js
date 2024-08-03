import React from "react";
import { Instagram } from "@mui/icons-material"
import { Container, IconButton, Typography } from "@mui/material"

const Footer = () => {
    return (
        <footer style={{ marginTop: 'auto', padding: '1rem 0', background: '#F1E8DF' }}>
            <Container>
                <Typography variant="body1" align="center">
                © 2024 Lucas Brito | Pâtisserie Nathalia Valle
                </Typography>
                <IconButton color="inherit" href="https://instagram.com/nathaliavallepatisserie" target="_blank" style={{ display: 'block', margin: '0 auto' }}>
                <Instagram />
                </IconButton>
            </Container>
        </footer>
    );
};

export default Footer;