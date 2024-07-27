import React from 'react';
import { Instagram } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, IconButton }from '@mui/material';

const Navbar = () => {
    return(
    <AppBar position="static">
    <Toolbar>
    <Typography variant="h6" style={{ flexGrow: 1 }}>Patisserie Nathalia Valle</Typography>
    <Button color="inherit" href="#home">Home</Button>
    <Button color="inherit" href="#about">Sobre Nós</Button>
    <Button color="inherit" href="#products"> Produtos</Button>
    <IconButton color="inherit" href="https://instagram.com" target="_blanck">
    <Instagram />
    </IconButton>
    </Toolbar>
    </AppBar>
    );
};
export default Navbar;
