import React from 'react';
import { Instagram } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/images/logo.png'; // Ajuste o caminho conforme necessário

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'rgba()', // Translucidez
  boxShadow: 'none',
});

const Logo = styled('img')({
  height: 50,
  marginRight: '1rem',
});

const Navbar = () => {
  return (
    <TransparentAppBar position="static">
      <Toolbar>
        <Logo src={logo} alt="Patisserie Nathalia Valle" />
        <Typography variant="h6" style={{ flexGrow: 1, color: '#69471C' }}>
          Patisserie Nathalia Valle
        </Typography>
        <Button color="inherit" href="/" style={{ color: '#69471C' }}>
          Home
        </Button>
        <Button color="inherit" href="/#about" style={{ color: '#69471C' }}>
          Sobre Nós
        </Button>
        <Button color="inherit" href="/#products" style={{ color: '#69471C' }}>
          Produtos
        </Button>
        <IconButton color="inherit" href="https://instagram.com/nathaliavallepatisserie" target="_blank" style={{ color: '#69471C' }}>
          <Instagram />
        </IconButton>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;
