import React from 'react';
import { Instagram } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/images/logo.png'; // Ajuste o caminho conforme necessário

const TransparentAppBar = styled(AppBar)({
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Translucidez
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
        <Typography variant="h6" style={{ flexGrow: 1, color: '#ff4081' }}>
          Patisserie Nathalia Valle
        </Typography>
        <Button color="inherit" href="/" style={{ color: '#ff4081' }}>
          Home
        </Button>
        <Button color="inherit" href="/#about" style={{ color: '#ff4081' }}>
          Sobre Nós
        </Button>
        <Button color="inherit" href="/#products" style={{ color: '#ff4081' }}>
          Produtos
        </Button>
        <IconButton color="inherit" href="https://instagram.com" target="_blank" style={{ color: '#ff4081' }}>
          <Instagram />
        </IconButton>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;
