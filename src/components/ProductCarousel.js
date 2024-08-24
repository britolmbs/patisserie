import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import bolo1 from '../assets/images/bolo1.png';
import bolo2 from '../assets/images/bolo2.png';
import bolo3 from '../assets/images/bolo3.png';
import naked from '../assets/images/nakedcakes.png';
import naked2 from '../assets/images/nakedcakes2.png';
import bemcasado from '../assets/images/bemcasado.png';
import bemcasado2 from '../assets/images/bemcasado2.png';
import brownie from '../assets/images/brownie.png';
import brownie2 from '../assets/images/brownie2.png';
import doce from '../assets/images/docinhos.png';
import doce2 from '../assets/images/docinhos2.png';
 
import menuPdf from '../assets/menu.pdf'; // Certifique-se de que o caminho está correto

const products = [
    { 
        name: 'Elegância Floral', 
        image: bolo1, 
        description: 'O Bolo Elegância Floral é uma obra-prima minimalista com creme branco, folhas de ouro e flores vermelhas. Sofisticado e delicado, é ideal para celebrações especiais e oferece um sabor inesquecível.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Aniversário Encantado', 
        image: bolo2, 
        description: 'O Bolo Aniversário Encantado celebra com alegria e cor, coberto com creme branco, balões de pasta americana em tons pastel, fitas coloridas e confeitos, criando um ar festivo e divertido.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Jardim de Delícias', 
        image: bolo3, 
        description: 'O Bolo Jardim de Delícias combina elegância e frescor com creme branco texturizado, flores brancas e verdes, folhas de eucalipto e um macaron. Perfeito para eventos que pedem natureza e requinte.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Naked Cake de Sonho', 
        image: naked, 
        description: 'O Naked Cake de Sonho celebra a simplicidade com camadas de bolo de chocolate e creme de baunilha, coberto com creme e raspas de chocolate rosa. Elegante e rústico, é perfeito para ocasiões especiais.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Naked Cake de Luxo', 
        image: naked2, 
        description: 'O Naked Cake de Luxo combina sofisticação e sabor com camadas de bolo de baunilha, recheio de creme de confeiteiro, rosetas de creme e raspas de chocolate branco. A fita dourada adiciona requinte, ideal para ocasiões especiais.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Doce União', 
       image: bemcasado, 
        description: 'O Doce União é um clássico bem-casado com camadas de pão de ló, recheio de doce de leite e cobertura de açúcar. Embalado em papel branco com laço dourado, é perfeito para casamentos e celebrações especiais.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Laços de Doçura', 
       image: bemcasado2, 
        description: 'Os Laços de Doçura são bem-casados de pão de ló com doce de leite, embalados em papel crepom branco e laços de cetim azul e laranja. Ideais para casamentos e celebrações, combinam tradição e modernidade.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Brownie Dourado', 
        image: brownie, 
        description: 'Experimente o Brownie Dourado, feito com ingredientes selecionados para uma textura macia e sabor intenso de chocolate. Embrulhado com fita dourada, é perfeito para presentear ou tornar qualquer momento especial.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Brownies Elegance', 
        image: brownie2, 
        description: 'Os Brownies Elegance são brownies artesanais envoltos em laços dourados ou lilás, perfeitos para ocasiões especiais. Feitos com ingredientes premium, oferecem um sabor rico e indulgente, ideal para presentear ou servir em eventos.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Caixa de Delícias Gourmet', 
       image: doce, 
        description: 'A Caixa de Delícias Gourmet é uma seleção de brigadeiros e doces finos artesanais, perfeitos para presentear ou eventos especiais. Combinando sabores tradicionais e sofisticados, oferece uma experiência inesquecível.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Seleção de Doces Finos', 
       image: doce2, 
        description: 'A Seleção de Doces Finos é uma caixa requintada de confeitaria artesanal, combinando sabores clássicos e contemporâneos. Ideal para presentear ou adicionar elegância a qualquer ocasião, oferece uma experiência única.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
];

const ProductCards = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, mx: 'auto' }}>
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
                                    sx={{ mt: 2 }}
                                >
                                    Comprar via WhatsApp
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
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