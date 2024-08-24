import React, { useState } from 'react';
import { Instagram } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import logo from '../assets/images/logo.png'; // Ajuste o caminho conforme necessário

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba()',
  boxShadow: 'none',
  backdropFilter: 'blur(10px)',
}));

const Logo = styled('img')({
  height: 50,
  marginRight: '1rem',
});

const NavbarButton = styled(Button)(({ theme }) => ({
  color: '#69471C',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Esconde os botões em telas pequenas
  },
}));

const NavbarIconButton = styled(IconButton)(({ theme }) => ({
  color: '#69471C',
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <TransparentAppBar position="static">
        <Toolbar>
          <Logo src={logo} alt="Patisserie Nathalia Valle" />
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#69471C' }}>
            Patisserie Nathalia Valle
          </Typography>
          <NavbarButton href="/">Home</NavbarButton>
          <NavbarButton href="/#about">Sobre Nós</NavbarButton>
          <NavbarButton href="/#products">Produtos</NavbarButton>
          <NavbarIconButton
            href="https://instagram.com/nathaliavallepatisserie"
            target="_blank"
          >
            <Instagram />
          </NavbarIconButton>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </TransparentAppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component="a" href="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/#about" onClick={toggleDrawer(false)}>
            <ListItemText primary="Sobre Nós" />
          </ListItem>
          <ListItem button component="a" href="/#products" onClick={toggleDrawer(false)}>
            <ListItemText primary="Produtos" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://instagram.com/nathaliavallepatisserie"
            target="_blank"
            onClick={toggleDrawer(false)}
          >
            <Instagram />
            <ListItemText primary="Instagram" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;