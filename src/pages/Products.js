import { Container, Typography } from "@mui/material";
import React from "react";
import ProductCarousel from "../components/ProductCarousel";

const Product = () => {
    return(
        <Container id="products" style={{ padding: '2rem 0' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Nossos Produtos
            </Typography>
            <ProductCarousel />
        </Container>
    );
};
export default Product;