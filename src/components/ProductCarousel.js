import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import bolo1 from '../assets/images/bolo1.png';
import bolo2 from '../assets/images/bolo2.png';
import bolo3 from '../assets/images/bolo3.png';
import menuPdf from '../assets/menu.pdf'; // Certifique-se de que o caminho está correto

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
    { 
        name: 'Produto 3', 
        image: bolo3, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 4', 
       // image: bolo4, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 5', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 6', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 7', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 8', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 9', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 10', 
       // image: bolo2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
];

const ProductCards = () => {
    return (
        <Box sx={{ padding: '2rem' }}>
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
            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    href={menuPdf}
                    download="menu.pdf"
                >
                    Baixar Cardápio em PDF
                </Button>
            </Box>
        </Box>
    );
};

export default ProductCards;
