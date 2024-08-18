import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductCarousel from '../components/ProductCarousel';

const Product = () => {
    return (
        <Container id="products" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Nossos Produtos
            </Typography>
            <ProductCarousel />
        </Container>
    );
};

export default Product;
