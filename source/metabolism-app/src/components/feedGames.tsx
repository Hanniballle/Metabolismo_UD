import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Link, Box } from '@mui/material';

const FeedGames = () => {
  const games = [
    { id: 1, title: 'La carrera de los chromistas', image: '/juegos/Jc1.png', url: 'https://view.genially.com/680440189190c659980dfeb0/interactive-content-la-carrera-de-los-chromistas', kingdom: 'Chromista' },
    { id: 2, title: 'Conociendo a los hongos', image: '/juegos/Jf1.png', url: 'https://view.genially.com/67fee8471392242e190f3523/presentation-conociendo-a-los-hongos', kingdom: 'Fungi' },
    { id: 3, title: 'Juego 3', image: '/path/to/image3.jpg', url: 'https://example.com/game3', kingdom: 'Reino 3' },
    { id: 4, title: 'Juego 4', image: '/path/to/image4.jpg', url: 'https://example.com/game4', kingdom: 'Reino 4' },
    { id: 5, title: 'Juego 5', image: '/path/to/image5.jpg', url: 'https://example.com/game5', kingdom: 'Reino 5' },
    { id: 6, title: 'Juego 6', image: '/path/to/image6.jpg', url: 'https://example.com/game6', kingdom: 'Reino 6' },
    { id: 7, title: 'Juego 7', image: '/path/to/image7.jpg', url: 'https://example.com/game7', kingdom: 'Reino 7' },
    { id: 8, title: 'Juego 8', image: '/path/to/image8.jpg', url: 'https://example.com/game8', kingdom: 'Reino 1' },
    { id: 9, title: 'Juego 9', image: '/path/to/image9.jpg', url: 'https://example.com/game9', kingdom: 'Reino 2' },
    { id: 10, title: 'Juego 10', image: '/path/to/image10.jpg', url: 'https://example.com/game10', kingdom: 'Reino 3' },
    { id: 11, title: 'Juego 11', image: '/path/to/image11.jpg', url: 'https://example.com/game11', kingdom: 'Reino 4' },
    { id: 12, title: 'Juego 12', image: '/path/to/image12.jpg', url: 'https://example.com/game12', kingdom: 'Reino 5' },
    { id: 13, title: 'Juego 13', image: '/path/to/image13.jpg', url: 'https://example.com/game13', kingdom: 'Reino 6' },
    { id: 14, title: 'Juego 14', image: '/path/to/image14.jpg', url: 'https://example.com/game14', kingdom: 'Reino 7' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" sx={{ color: 'black', marginBottom: 4 }}>
        Zona de Juegos
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={3} key={game.id}>
            <Link href={game.url} target="_blank" rel="noopener noreferrer" underline="none">
              <Card sx={{ borderRadius: 4, boxShadow: 3, position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={game.image}
                  alt={game.title}
                />
                <CardContent sx={{ paddingBottom: '16px' }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {game.kingdom}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeedGames;