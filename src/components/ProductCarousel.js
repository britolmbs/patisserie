import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

const products = [
    { 
        name: 'Produto 1', 
        image: 'assets/images/image1.png', 
        description: 'Descrição do Produto 1',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 2', 
        image: 'assets/images/image2.png', 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
];

const ProductCards = () => {
    return (
        <Grid container spacing={4}>
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={product.image}
                            alt={product.name}
                        />
                        <CardContent>
                            <Typography variant="h5">{product.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {product.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={product.whatsappLink}
                                target="_blank"
                                style={{ marginTop: '10px' }}
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
