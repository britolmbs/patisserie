import React from 'react';
import { Instagram } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/images/logo.png'; // Ajuste o caminho conforme necessário

const TransparentAppBar = styled(AppBar)(({ theme}) => ({
  backgroundColor: 'rgba()', // Translucidez
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
}));

const Logo = styled('img')({
  height: 50,
  marginRight: '1rem',
});

const NavbarButton = styled(Button)(({ theme }) => ({
  color: '#69471C',
}));

const NavbarIconButton = styled(IconButton)(({ theme }) => ({
color: '#69471C'
}));

const Navbar = () => {
  return (
    <TransparentAppBar position="static">
      <Toolbar>
        <Logo src={logo} alt="Patisserie Nathalia Valle" />
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#69471C' }}>
          Patisserie Nathalia Valle
        </Typography>
        <NavbarButton href="/">
          Home
        </NavbarButton>
        <NavbarButton href="/#about">
          Sobre Nós
        </NavbarButton>
        <NavbarButton href="/#products">
          Produtos
        </NavbarButton>
        <NavbarIconButton  href="https://instagram.com/nathaliavallepatisserie" target="_blank">
          <Instagram />
        </NavbarIconButton>
      </Toolbar>
    </TransparentAppBar>
  );
};

export default Navbar;
