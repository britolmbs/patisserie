import React from "react";
import { Container } from "@mui/material";
import ProductCarousel from '../components/ProductCarousel';
import About from './About';

const Home = () => {
    return (
        <Container id="home" style={{ marginTop: '2rem' }}>
            <About />
            <ProductCarousel />
        </Container>
    );
};

export default Home;
