import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import bolo1 from '../assets/images/bolo1.png';
import bolo2 from '../assets/images/bolo2.png';

const products = [
    { 
        name: 'Produto 1', 
        image: bolo1, 
        description: 'Descrição do Produto 1',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 2', 
        image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
];

const ProductCards = () => {
    return (
        <Grid container spacing={4} justifyContent="center">
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={product.image}
                            alt={product.name}
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={product.whatsappLink}
                                target="_blank"
                                sx={{ marginTop: '10px' }}
                            >
                                Compra via WhatsApp
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductCards;
