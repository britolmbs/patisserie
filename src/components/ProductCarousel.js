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
        description: 'O Bolo Elegância Floral é uma obra-prima minimalista que combina sofisticação e delicadeza. Com uma cobertura impecável de creme branco, adornada com detalhes sutis de folhas de ouro comestíveis, este bolo é coroado com um arranjo vibrante de flores vermelhas, trazendo um toque de natureza e cor. Ideal para celebrações especiais, este bolo não só encanta pelo visual, mas também promete uma experiência de sabor inesquecível.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Aniversário Encantado', 
        image: bolo2, 
        description: 'O Bolo Aniversário Encantado é uma celebração alegre e colorida do ano de vida. Com uma cobertura suave de creme branco, o bolo é decorado com balões de pasta americana em tons pastel, fitas coloridas e pequenos pontos de confeitos, trazendo um ar festivo e divertido.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Jardim de Delícias', 
        image: bolo3, 
        description: 'O Bolo Jardim de Delícias é uma combinação harmoniosa de elegância e frescor natural. Com uma cobertura de creme branco texturizada com um padrão geométrico verde, este bolo é decorado com flores brancas e verdes vibrantes, folhas de eucalipto e um delicado macaron no topo. A mistura de elementos naturais e detalhes sofisticados faz deste bolo uma escolha perfeita para celebrações que pedem um toque de natureza e requinte. Ideal para casamentos, aniversários ou eventos especiais, o Bolo Jardim de Delícias promete encantar tanto pelo visual quanto pelo sabor.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Naked Cake de Sonho', 
        image: naked, 
        description: 'O Naked Cake de Sonho é uma delícia visual e gustativa que celebra a simplicidade e a autenticidade dos sabores. Com camadas generosas de bolo de chocolate intercaladas com um cremoso recheio de creme de baunilha, este bolo é finalizado com uma cobertura de creme e raspas de chocolate rosa no topo. A fita personalizada adiciona um toque de elegância, tornando-o perfeito para qualquer ocasião especial. Este naked cake é ideal para quem aprecia a beleza rústica e o sabor caseiro, proporcionando uma experiência doce e inesquecível.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Naked Cake de Luxo', 
        image: naked2, 
        description: 'O Naked Cake de Luxo é uma celebração da sofisticação e do sabor autêntico. Com camadas ricas de bolo de baunilha intercaladas com um cremoso recheio de creme de confeiteiro, este bolo é decorado com elegantes rosetas de creme no topo e raspas de chocolate branco. A fita dourada personalizada adiciona um toque de requinte, tornando-o perfeito para ocasiões especiais que pedem um toque de elegância. Este naked cake é ideal para quem aprecia a beleza rústica com um toque de luxo, proporcionando uma experiência visual e gustativa inesquecível.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Doce União', 
       image: bemcasado, 
        description: 'O Doce União é um clássico bem-casado que simboliza amor e felicidade em cada mordida. Composto por duas camadas macias de pão de ló, recheadas com um delicioso doce de leite e envoltas em uma fina camada de açúcar, este doce é embalado com elegância em papel branco e adornado com um laço dourado. Perfeito para casamentos, aniversários e celebrações especiais, o Doce União é uma lembrança doce e sofisticada que encanta tanto pelo sabor quanto pela apresentação.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: ' Laços de Doçura', 
       image: bemcasado2, 
        description: 'Os Laços de Doçura são bem-casados que celebram a união e a alegria com um toque de cor e elegância. Com duas camadas macias de pão de ló recheadas com um delicioso doce de leite, cada bem-casado é envolto em papel crepom branco e adornado com laços de cetim em tons vibrantes de azul e laranja. Perfeitos para casamentos, chás de bebê, aniversários e outras celebrações especiais, os Laços de Doçura são uma lembrança encantadora que combina tradição e um toque de modernidade, proporcionando uma experiência doce e memorável.',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 8', 
        image: brownie, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 9', 
        image: brownie2, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 10', 
       image: doce, 
        description: 'Descrição do Produto 2',
        whatsappLink: 'https://wa.me/+5521999762602'
    },
    { 
        name: 'Produto 11', 
       image: doce2, 
        description: 'Descrição do Produto 2',
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